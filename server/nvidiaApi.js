// nvidiaApi.js
import fetch from "node-fetch"

const invokeUrl = "https://health.api.nvidia.com/v1/biology/mit/diffdock"
const assetUploadUrl = "https://api.nvcf.nvidia.com/v2/nvcf/assets"

const headers = {
	Authorization:
		"Bearer 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",
	Accept: "application/json",
}

export const main = async (payload) => {
	const [proteinAssetId, ligandAssetId] = await Promise.all(
		[
			{ description: "Protein", payload: payload.protein },
			{ description: "Ligand", payload: payload.ligand },
		].map(({ description, payload }) =>
			fetch(assetUploadUrl, {
				method: "POST",
				body: JSON.stringify({
					contentType: "text/plain",
					description,
				}),
				headers: {
					"Content-Type": "application/json",
					...headers,
				},
			})
				.then((res) => {
					if (!res.ok) {
						throw new Error(
							`${res.status} (${res.statusText}): ${res.headers.get(
								"x-nv-error-msg"
							)}`
						)
					}

					return res
						.json()
						.then(({ assetId, uploadUrl, contentType, description }) => {
							return fetch(uploadUrl, {
								method: "PUT",
								body: payload,
								headers: {
									"Content-Type": contentType,
									"x-amz-meta-nvcf-asset-description": description,
								},
							}).then((res) => {
								if (!res.ok) {
									return res.text().then((text) => {
										throw new Error(
											`${res.status} (${res.statusText}): ${text}`
										)
									})
								}
								return assetId
							})
						})
				})
				.catch((error) => console.error(error.message))
		)
	)

	const response = await fetch(invokeUrl, {
		method: "POST",
		body: JSON.stringify({
			...payload,
			protein: proteinAssetId,
			ligand: ligandAssetId,
			is_staged: true,
		}),
		headers: {
			"Content-Type": "application/json",
			"NVCF-INPUT-ASSET-REFERENCES": [proteinAssetId, ligandAssetId],
			...headers,
		},
	})

	if (!response.ok) {
		throw new Error(
			`HTTP error! Status: ${response.status} ${
				response.statusText
			} ${response.headers.get("x-nv-error-msg")}`
		)
	}

	return response.json()
}
