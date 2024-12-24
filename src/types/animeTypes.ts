export default interface Anime {
	id: number
	posters: {
		medium: { url: string }
		original: { url: string }
	}
	names: {
		ru: string
	}
	description: string
}
