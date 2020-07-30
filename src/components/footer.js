import React from "react"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
    const data = useStaticQuery(graphql`
        query SocialMediaQuery {
            site {
                siteMetadata {
                    author,
                    social {
                        twitter,
                        github,
                        linkedin
                    }
                }
            }
        }
    `);
    const { author, social } = data.site.siteMetadata;

    return (
        <div className="bg-red">
            <footer className="w-full max-w-screen-xl relative mx-auto px-12 py-5">
                <div className="md:flex md:justify-between md:py-12 py-6">
                    <div className="hidden md:block">
                        <span className="font-bold text-3xl">Connect</span>
                    </div>
                    <div className="flex justify-center">
                        <a href={`https://www.linkedin.com/in/${social.linkedin}`} target="_blank"
                           className="transition font-black hover:no-underline hover:text-white underline">Linkedin</a>,
                        <a href={`https://twitter.com/${social.twitter}`} target="_blank"
                           className="transition font-black hover:no-underline hover:text-white underline ml-2">Twitter</a>,
                        <a href={`https://github.com/${social.github}`} target="_blank"
                           className="transition font-black hover:no-underline hover:text-white underline ml-2">GitHub</a>
                    </div>
                </div>
                <div
                    className="border-black border-t-2 font-serif pt-5 text-center">&copy; {author} {` `} {new Date().getFullYear()}</div>
            </footer>
        </div>
    )
}

export default Footer
