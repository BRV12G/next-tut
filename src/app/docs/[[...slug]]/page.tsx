export default  function Docs( {params}: { params: { slug?: string[]} } ) {
    const slug =  params.slug;
        if(slug?.length === 2) {
            return (
                <div>
                     Docs page for feature {slug[0]} and concept {slug[1]}
                </div>
            )
        }
        else if(slug?.length === 1) {
            return (
                <div>
                     Docs page for feature {slug[0]}
                </div>
            )
        }
        return <div>Docs Home Page</div>
}
