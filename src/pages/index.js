import React from "react"
import {Link} from "gatsby"
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
        <div>
            <p className="text-4xl text-center my-24">Delivery focused software engineer, highly experienced in PHP, JavaScript &
                DevOps.</p>
        </div>
        <div>
            <p className="mt-3 text-lg leading-7 text-gray-500 text-center md:text-left">
                From my time in the industry i've led and delivered projects with some well known brands...{` `}
                <a className="text-hyperlink" href="https://johnsmedley.com/" target="_blank">John Smedley</a>, <a className="text-hyperlink" href="https://pzcussons.com" target="_blank">PZCussons</a>, <a
                className="text-hyperlink" href="https://reiss.com" target="_blank">REISS</a> &amp; <a className="text-hyperlink" href="https://victoriabeckham.com" target="_blank">Victoria Beckham</a>
            </p>
        </div>
        <div className="py-12 bg-white">
            <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
                <div className="lg:grid lg:grid-cols-3 lg:gap-8">
                    <div>
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-lg leading-6 font-medium text-gray-900">Software</h5>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                Using well established frameworks such as <a className="text-hyperlink" href="https://laravel.com" target="_blank">Laravel</a> &amp; <a className="text-hyperlink"
                                target="_blank" href="https://vuejs.org/">VueJS</a> I can craft valuable software guided by robust automated testing &amp; acceptance strategies.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"></path>
                            </svg>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-lg leading-6 font-medium text-gray-900">Agile Delivery</h5>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                Facilitate Agile delivery using LEAN principles such as Impact & Story mapping, LEAN Kanban & Agile principles along with other XP practices.
                            </p>
                        </div>
                    </div>
                    <div className="mt-10 lg:mt-0">
                        <div className="flex items-center justify-center h-12 w-12 rounded-md bg-red text-white">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                      d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
                            </svg>
                        </div>
                        <div className="mt-5">
                            <h5 className="text-lg leading-6 font-medium text-gray-900">Open source</h5>
                            <p className="mt-2 text-base leading-6 text-gray-500">
                                I have Open Source contributions for <a className="text-hyperlink" href="https://github.com/bennoislost">tools and
                                products</a> I use and as part of <a className="text-hyperlink" href="https://github.com/third-rail-packages/">The
                                Third Rail</a> {` `}
                                where I contribute to <a className="text-hyperlink" href="https://wiki.openraildata.com/">Open Rail Data</a> for the UK Railways.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Layout>
)
export default IndexPage
