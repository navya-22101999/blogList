// Write your JS code here
const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails
  return (
    <li>
      <div>
        <h1>{title}</h1>
        <p>{publishedDate}</p>
      </div>
      <div>
        <p>{description}</p>
      </div>
    </li>
  )
}
export default BlogItem
