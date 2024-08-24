import bg_image_1 from '../assets/image/banner1.jpg'
import banner_image_1 from '../assets/image/imgSpinBanner1.png'
import bg_image_2 from '../assets/image/banner2.jpg'
import banner_image_2 from '../assets/image/imgSpinBanner2.png'
import bg_image_3 from '../assets/image/banner3.jpg'
import banner_image_3 from '../assets/image/imgSpinBanner3.png'


let hero_product = [
  {
    id: 1,
    content: "Enjoy Our Delicious Meal",
    button: {
      text_1: "Book a table",
      text_2: "Menu"
    },
    banner: {
      banner_image: banner_image_1,
      bg_image: bg_image_1
    }
  },
  {
    id: 2,
    content: "Sing up for free to order food",
    button: {
      text_1: "Sing up",
      text_2: "Login"
    },
    banner: {
      banner_image: banner_image_2,
      bg_image: bg_image_2
    }
  },
  {
    id: 3,
    content: "Experienced chefs ready to serve",
    button: {
      text_1: "Our Team",
      text_2: "Service"
    },
    banner: {
      banner_image: banner_image_3,
      bg_image: bg_image_3
    }
  }
]

export default hero_product;