
export default async function Page({params}){
    console.log("Params", params);
    const article = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
    .then((response)=>response.json())
    .then((data)=>data)

    return (
     <div className="flex flex-col p-20 space-y-5">
        <h1 className="capitalize">{article.title}</h1>
        <p>
            {article.body}
        </p>
     </div>
    )
}