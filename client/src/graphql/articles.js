import { useQuery, gql } from "@apollo/client";

const GET_ARTICLES = gql`
  query {
    articles {
      uuid
      source
      title
      link
      filters
    }
  }
`;

const getArticles = () => {
  const { loading, error, data } = useQuery(GET_ARTICLES);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;
  if (data) return (
    <div>
      {data.articles.map(article => <p>{article.title}</p>)}
    </div>
  )
  
};

export default getArticles;
