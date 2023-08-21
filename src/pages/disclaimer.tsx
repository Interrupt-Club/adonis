// If you don't want to use TypeScript you can delete this file!
import * as React from "react"
import { PageProps, Link, graphql, HeadFC } from "gatsby"
import Layout from "../components/layout"

type DataProps = {
  site: {
    buildTime: string
  }
}

const PrivacyPolicyPage: React.FC<PageProps<DataProps>> = ({
  data,
  path,
  location,
}) => {
  console.log({data})
  return <Layout location={location}>
      <h1>Disclaimer</h1>
      <div>last Updated on 5th Dec, 1992</div>
      <div data-v-351375e4="" class="prose prose-indigo mt-6 prose-sm sm:prose lg:prose-lg mx-auto nuxt-content"><p data-v-351375e4="">WEBSITE DISCLAIMER</p>
<p data-v-351375e4="">The information provided by Interview Ready (“Company”, “we”, “our”, “us”) on interviewready.io (the “Site”) is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site.</p>
<p data-v-351375e4="">UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.</p>
<p data-v-351375e4="">EXTERNAL LINKS DISCLAIMER</p>
<p data-v-351375e4="">The Site may contain (or you may be sent through the Site) links to other websites or content belonging to or originating from third parties or links to websites and features. Such external links are not investigated, monitored, or checked for accuracy, adequacy, validity, reliability, availability or completeness by us.</p>
<p data-v-351375e4="">WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME RESPONSIBILITY FOR THE ACCURACY OR RELIABILITY OF ANY INFORMATION OFFERED BY THIRD-PARTY WEBSITES LINKED THROUGH THE SITE OR ANY WEBSITE OR FEATURE LINKED IN ANY BANNER OR OTHER ADVERTISING. WE WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES.</p>
<p data-v-351375e4="">TESTIMONIALS DISCLAIMER</p>
<p data-v-351375e4="">The Site may contain testimonials by users of our products and/or services. These testimonials reflect the real-life experiences and opinions of such users. However, the experiences are personal to those particular users, and may not necessarily be representative of all users of our products and/or services. We do not claim, and you should not assume that all users will have the same experiences.</p>
<p data-v-351375e4="">YOUR INDIVIDUAL RESULTS MAY VARY.</p>
<p data-v-351375e4="">The testimonials on the Site are submitted in various forms such as text, audio and/or video, and are reviewed by us before being posted. They appear on the Site verbatim as given by the users, except for the correction of grammar or typing errors. Some testimonials may have been shortened for the sake of brevity, where the full testimonial contained extraneous information not relevant to the general public.</p>
<p data-v-351375e4="">The views and opinions contained in the testimonials belong solely to the individual user and do not reflect our views and opinions.</p>
<p data-v-351375e4="">ERRORS AND OMISSIONS DISCLAIMER</p>
<p data-v-351375e4="">While we have made every attempt to ensure that the information contained in this site has been obtained from reliable sources, Interview Ready is not responsible for any errors or omissions or for the results obtained from the use of this information. All information in this site is provided “as is”, with no guarantee of completeness, accuracy, timeliness or of the results obtained from the use of this information, and without warranty of any kind, express or implied, including, but not limited to warranties of performance, merchantability, and fitness for a particular purpose.</p>
<p data-v-351375e4="">In no event will Interview Ready, its related partnerships or corporations, or the partners, agents or employees thereof be liable to you or anyone else for any decision made or action taken in reliance on the information in this Site or for any consequential, special or similar damages, even if advised of the possibility of such damages.</p>
<p data-v-351375e4="">USER DATA DELETION REQUESTS</p>
<p data-v-351375e4="">Please connect with us over email at <a data-v-351375e4="" href="mailto:gkcs@interviewready.io">gkcs@interviewready.io</a> for data deletion requests. All of your data related to the system will be deleted in a month.</p>
<p data-v-351375e4="">LOGOS AND TRADEMARKS DISCLAIMER</p>
<p data-v-351375e4="">All logos and trademarks of third parties referenced on interviewready.io are the trademarks and logos of their respective owners. Any inclusion of such trademarks or logos does not imply or constitute any approval, endorsement or sponsorship of Interview Ready by such owners.</p>
<p data-v-351375e4="">CONTACT US</p>
<p data-v-351375e4="">Should you have any feedback, comments, requests for technical support or other inquiries, please contact us by email: <a data-v-351375e4="" href="mailto:contact@interviewready.io">contact@interviewready.io</a>.</p></div>
    </Layout>
  }

export default PrivacyPolicyPage

export const query = graphql`
  {
    site {
      buildTime(formatString: "YYYY-MM-DD hh:mm a z")
    }
  }
`
