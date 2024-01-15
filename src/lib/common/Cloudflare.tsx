import Script from "next/script";

const Cloudflare = () => {
   return (
      <>
         <Script src="https://static.cloudflareinsights.com/beacon.min.js" data-cf-beacon='{"token": "91cf893148704fe5a51a419b2c0282fa"}' ></Script>
      </>
   )
}

export default Cloudflare;