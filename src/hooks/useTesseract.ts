import { createWorker } from "tesseract.js"

export function useTesseract() {
	async function analyse(image: File) {
		const worker = await createWorker("eng", 1, {
			logger: (m) => console.log("tesseract log", m),
		})
		const ret = await worker.recognize(image)
		await worker.terminate()
		return ret.data.text
	}

	return {
		analyse,
	}
}
