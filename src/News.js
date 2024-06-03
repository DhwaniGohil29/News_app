import {useState} from "react";
import axios from "axios";
import Result from "./Result";

export default function News()
{
	const [info, setInfo] = useState([]);
	
	const gn = (event) =>{
		event.preventDefault();
		let a1 = "https://newsapi.org/v2/top-headlines";
		let a2 = "?country=" + "in";
		let a3 = "&apiKey=" + "6a37849b182047839bd5bbcf6cc6e5c3"
		let url = a1 + a2 + a3;
		axios.get(url)
		.then(res=>setInfo(res.data.articles))
		.catch(err=>setInfo("issue " + err))



	}
return(
<>
<center>
	<h1>News From India</h1>
	<form onSubmit={gn}>
		<input type="submit" value="Get News"/>

	</form>

	{
		info.map((e)=>(
		<div>
			<Result title={e.title} urlToImage={e.urlToImage} 			url={e.url}/>
		
		</div>

	))


	}
</center>
</>
);

} 