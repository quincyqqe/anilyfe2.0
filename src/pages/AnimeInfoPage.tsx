import { useParams } from 'react-router-dom'
import { useAnimeById } from '../hooks/useAnimeById'

export default function AnimeInfoPage() {
	const { id } = useParams()
	const { data } = useAnimeById(Number(id))

	console.log(data)
	return <div>AnimeInfoPage</div>
}
