import LinkedIn from "../components/elements/Icons/LinkedIn";
import Telegram from "../components/elements/Icons/Telegram";
import Email from "../components/elements/Icons/Email";
import YouTube from "../components/elements/Icons/YouTube";
import GitHub from "../components/elements/Icons/GitHub";
import Instagram from "../components/elements/Icons/Instagram";

let ContactData = [
   {
      id: 1,
      social: 'LinkedIn',
      username: '@milindgoel15',
      link: 'https://linkedin.com/in/milindgoel15',
      image: <LinkedIn alt="LinkedIn" />,
      delay: 0
   },
   {
      id: 2,
      social: 'Telegram',
      username: '@milindgoel15',
      link: 'https://telegram.me/milindgoel15',
      image: <Telegram alt="Telegram" />,
      delay: 0.1
   },
   {
      id: 3,
      social: 'Email',
      username: 'milindgoel15@gmail.com',
      link: 'mailto:milindgoel15@gmail.com',
      image: <Email alt="Email" />,
      delay: 0.08
   },
   {
      id: 4,
      social: 'YouTube',
      username: '@milindgoel15',
      link: 'https://youtube.com/milindgoel15',
      image: <YouTube alt="YouTube" />,
      delay: 0.12
   },
   {
      id: 5,
      social: 'GitHub',
      username: '@milindgoel15',
      link: 'https://github.com/milindgoel15',
      image: <GitHub alt="GitHub" />,
      delay: 0.12
   },
   {
      id: 6,
      social: 'Instagram',
      username: '@milindgoel15',
      link: 'https://instagram.com/milindgoel15',
      image: <Instagram alt="Instagram" />,
      delay: 0.1
   },
]

export default ContactData;