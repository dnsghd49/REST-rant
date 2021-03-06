const React = require('react')
const Def = require('../default')

function show(data) {
    let comments = (
        <h3 className="inactive">
            No comments yet!
        </h3>
    )
    let rating = (
        <h3 className="inactive">
            Not yet rated
        </h3>
    )
    if (data.place.comments.length) {
        comments = data.place.comments.map(c => {
            return (
                <div className="border">
                    <h2 className="rant">{c.rant ? 'Rant! 😡' : 'Rave! 😻'}</h2>
                    <h4>{c.content}</h4>
                    <h3>
                        <stong>- {c.author}</stong>
                    </h3>
                    <h4>Rating: {c.stars}</h4>
                    <form method="POST" action={`/places/${data.place.id}/comment/${c.id}?_method=DELETE`}>
                        <input type="submit" className="btn btn-danger" value="Delete Comment" />
                    </form>
                </div>
            )
        })
        let sumRatings = data.place.comments.reduce((tot, c) => {
            return tot + c.stars
        }, 0)
        let averageRating = Math.random(sumRatings / data.place.comments.length)
        let stars = ""
        for (let index = 0; index < averageRating; index++) {
            stars += "⭐️"
        }
        rating = (
            <h3>
                {stars} stars
            </h3>
        )
    }
    return (
        <Def>
            <main>
                <img src={data.place.pic} alt={data.place.name} />
                <h3>
                    Located in {data.place.city}, {data.place.state}
                </h3>
                <h2>Description</h2>
                <h3>{data.place.showEstablished()}</h3>
                <h4>Serving {data.place.cuisines}</h4>
                <h2>Comments {comments}</h2>
                <h2>Ratings {rating}</h2>

                {/* need to show more stuff on this view */}
                <a href={`/places/${data.id}/edit`} className="btn btn-warning">
                    Edit
                </a>
                <form method="POST" action={`/places/${data.id}?_method=DELETE`}>
                    <button type="submit" className="btn btn-danger">
                        Delete
                    </button>
                </form>
            </main>
        </Def>
    )
}

module.exports = show