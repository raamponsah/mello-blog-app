
export default async function Page(){

   const articles =  await fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(data => {return data})

      

  return (
    <div className="mx-40" space-y-10>
      <h1 className="text-2xl font-light">Mello Blog App</h1>
      <div className="space-y-10 mt-4">

     {
      articles.map((article,index)=>{
        return (
          <div key={article.id}>
              <h4 className="capitalize">{article.title}</h4>
              <p className="text-xs">{article.body}</p>
          </div>
        )
      })
     }

    



      </div>
    </div>
  )
}