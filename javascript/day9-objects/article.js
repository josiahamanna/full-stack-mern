/* create an object called article
this article object must have properties - title, body, author, publishDate, category */
// add a new property called comments
// each comment must have, title, body

const article = {
    title : 'Mad Men',
    body : 'Serviving a nuclear hollocoast and turning the crisis into a business',
    author : 'Ben franklin',
    publishDate : 1955,
    category: 'Psychology',
    comments: [
        {name: 'sanjay', title: 'bad', body: 'information is totally biased'},
        {name: 'rakesh', title: 'opened my eyes', body: 'Mankind is so evil'}
    ]
}

console.log(`${article.title} is about ${article.body}, written by ${article.author} in the year of ${article.publishDate}.\nIt\'s a ${article.category} atricle.`)

console.log(`There are ${article.comments.length} comments for this book (${article.title}). \nComments are as bellow`)
article.comments.forEach(function(comment) {
    console.log(`${comment.name} - ${comment.title} - ${comment.body}`)
})



