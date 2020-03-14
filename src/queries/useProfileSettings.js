import { graphql, useStaticQuery } from 'gatsby'

export const useProfileSettings = () => {
  const data = useStaticQuery(graphql`
    {
      markdownRemark(fileAbsolutePath: {regex: "/settings/profile/index.md/"}) {
        frontmatter {
          name
          tagline
          links {
            href
            title
          }
          about
          personalProfilePhoto
          summary
        }
      }
    }
  `)

  return data.markdownRemark.frontmatter
}
