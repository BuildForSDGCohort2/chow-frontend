import JollofImg from "../images/food/Jollof-Rice-15.jpg";
import FriedRiceImg from "../images/food/fried-rice-8-1200.jpg";
import TurkeyImg from "../images/food/turkey.jpg";
import CocunutImg from "../images/food/coconut-rice-easy-side-dish-4.jpg";
import PorkImg from "../images/food/porkChops.jpeg";
import ChickenImg from "../images/food/buttermilk-fried-chicken-11-1200.jpg";
import PlantainImg from "../images/food/fried-plantain.jpg";
import MoimoiImg from "../images/food/moimoi.webp";
import EfoImg from "../images/food/efo.webp";
import FriesImg from "../images/food/fries.jpg";
import FishImg from "../images/food/Pan-Fried-Fish-Grandma-Style44-735x735.jpg";
import OfadaImg from "../images/food/ofada-rice-sauce-per-portion.jpg";
import CinnamonImg from "../images/snacks/cinnamon-rolls-fp.jpg";
import PopCornImg from "../images/snacks/popCorn.jpg";
import MeatPieImg from "../images/snacks/meatPie.jpeg";
import DonutsImg from "../images/snacks/donuts.jpg";
import ChickenPieImg from "../images/snacks/chickenPie.jpeg";
import CupCakesImg from "../images/snacks/cupcakes.jpg";
import CaesarImg from "../images/salads/caesar-salad-88749-1.jpeg";
import ChickenCaesarImg from "../images/salads/chicken-caesar-salad-83105-1.jpeg";
import GreekImg from "../images/salads/super-easy-greek-salad-81664-1.jpeg";
import PotatoImg from "../images/salads/potato-salad-606-1.jpeg";
import LettuceImg from "../images/salads/lettuce-avocado-and-mango-salad-59642-1.jpeg";
import PastaImg from "../images/salads/pasta-salad-714-1.jpeg";
import Mango from "../images/smoothies/mango-madness-smoothie-1564585615.jpg";
import Banana from "../images/smoothies/banana-mango-avocado-green-smoothie-emilie-eats.jpg";
import Orange from "../images/smoothies/freshly-blended-yellow-and-orange-fruit-smoothie-in-royalty-free-image-530209184-1564585945.jpg";
import Berry from "../images/smoothies/raspberry-smoothie-with-pomegranate-and-blueberry-royalty-free-image-811377316-1564585987.jpg";
import BlueBerry from "../images/smoothies/blueberry-muffin-smoothie-happiness-is-homemade.jpg";
import Strawberry from "../images/smoothies/strawberry-and-banana-smoothie-royalty-free-image-953160716-1564585870.jpg";
import SamosaImg from "../images/smallChops/samosa.webp";
import SpringRollImg from "../images/smallChops/springRolls.jpg";
import PuffPuffImg from "../images/smallChops/puffpuff.jpg";
import gizzardImg from "../images/smallChops/gizzard.jpg";
import CornDogs from "../images/smallChops/cornDogs.jpg";
import Chicken from "../images/smallChops/chicken.jpeg";
import pizzaOne from "../images/pizzas/hotChilliMeat-removebg-preview.png";
import pizzaTwo from "../images/pizzas/supersupreme-removebg-preview.png";
import pizzaThree from "../images/pizzas/bbqChicken-removebg-preview.png";
import pizzaFour from "../images/pizzas/pepperoni-removebg-preview.png";
import pizzaFive from "../images/pizzas/bbqMeat-removebg-preview.png";
import pizzaSix from "../images/pizzas/chickenSuupreme-removebg-preview.png";
import cokePet from "../images/drinks/cokepet.jpg";
import pepsiPet from "../images/drinks/pepsi.png";
import fantaPet from "../images/drinks/fantaPet.png";
import spritePet from "../images/drinks/spritepet.jpg";
import sevenUpPet from "../images/drinks/7uppet.jpeg";
import teemPet from "../images/drinks/teemsodapet.webp";
import cokeCan from "../images/drinks/cokecan.jpg";
import pepsiCan from "../images/drinks/pepsican.jpg";
import sevenupCan from "../images/drinks/7upcan.jpg";
import teemCan from "../images/drinks/teemcan.jpg";
import teemCan2 from "../images/drinks/teemtonic.jpg";
import fantaCan from "../images/drinks/fantacan.jpg";
import spriteCan from "../images/drinks/spritecan.jpg"
import aquafinaWater from "../images/drinks/aquafinawater.jpg";
import evaWater from "../images/drinks/evawater.jpg";
import cokeZero from "../images/drinks/cokepetzero.jpg";







const products = [ 
    { food: [
        { id: 0,name: "Jollof Rice", price: 500, image: JollofImg },
        { id: 1, name: "Efo Riro", price: 500, image: EfoImg },
        { id: 2, name: "Coco-nut Rice", price: 500, image: CocunutImg },
        { id: 3, name: "Ofada Rice", price: 500, image: OfadaImg },
        { id: 4, name: "Fried rice", price: 500, image: FriedRiceImg },
        { id: 5, name: "Chicken", price: 500, image: ChickenImg },
        { id: 6, name: "Fish", price: 500, image: FishImg },
        { id: 7, name: "Pork Chops", price: 500, image: PorkImg },
        { id: 8, name: "Moi Moi", price: 500, image: MoimoiImg },
        { id: 9, name: "Turkey", price: 500, image: TurkeyImg },
        { id: 10, name: "Fries", price: 500, image: FriesImg },
        { id: 11, name: "Fried Plantain", price: 500, image: PlantainImg },
    ] },
    { snacks: [
        { id: 12, name: "Cinnamon Rolls", price: 500, image: CinnamonImg },
        { id: 13, name: "Pop Corn", price: 200, image: PopCornImg },
        { id: 14, name: "Meat Pie", price: 300, image: MeatPieImg },
        { id: 15, name: "Donuts", price: 200, image: DonutsImg },
        { id: 16, name: "Chicken Pie", price: 300, image: ChickenPieImg },
        { id: 17, name: "Cup Cakes", price: 500, image: CupCakesImg },
    ] },
    { salads: [
        { id: 18, name: "Caesar Salad", price: 500, image: CaesarImg },
        { id: 19, name: "Chicken Caesar Salad", price: 500, image: ChickenCaesarImg },
        { id: 20, name: "Breek Salad", price: 500, image: GreekImg },
        { id: 21, name: "Potato Salad", price: 500, image: PotatoImg },
        { id: 22, name: "Pasta Salad", price: 500, image: PastaImg },
        { id: 23, name: "Lettuce-Avocado Salad", price: 500, image: LettuceImg },
    ] },
    { smoothies: [
        { id: 24, name: "Mango", price: 500, image: Mango },
        { id: 25, name: "Blueberry", price: 500, image: BlueBerry },
        { id: 26, name: "Orange", price: 500, image: Orange },
        { id: 27, name: "Green", price: 500, image: Banana },
        { id: 28, name: "Strawberry", price: 500, image: Strawberry },
        { id: 29, name: "Pomegranate", price: 500, image: Berry },
    ] },
    { smallChops: [
        { id: 30, name: "Samosa", price: 1500, image: SamosaImg },
        { id: 31, name: "Spring Rolls", price: 1500, image: SpringRollImg },
        { id: 32, name: "Puff Puffs", price: 1500, image: PuffPuffImg},
        { id: 33, name: "Peppered Gizzard", price: 1500, image: gizzardImg },
        { id: 34, name: "Corn Dogs", price: 1500, image: CornDogs},
        { id: 35, name: "Chicken Cuts", price: 1500, image: Chicken },
    ] },
    { pizza: [
        { id: 36, name: "Hot Chilli", price: 1500, image: pizzaOne },
        { id: 37, name: "Super Supreme", price: 2000, image: pizzaTwo },
        { id: 38, name: "BBQ Chicken", price: 2000, image: pizzaThree },
        { id: 39, name: "Hot Pepperoni", price: 2000, image:  pizzaFour},
        { id: 40, name: "Hot Chicken Supreme", price: 2000, image: pizzaFive },
        { id: 41, name: "Hot BBQ Beef", price: 2000, image: pizzaSix },
    ] },
    { drinks: [
        { id: 42, name: "Coca-Cola Pet-35cl", price: 150, image: cokePet },
        { id: 43, name: "Pepsi Pet-35cl", price: 150, image: pepsiPet},
        { id: 44, name: "Fanta Pet-35cl", price: 150, image: fantaPet },
        { id: 45, name: "Sprite Pet-35cl", price: 150, image: spritePet },
        { id: 46, name: "Teem Soda Pet-35cl", price: 150, image: teemPet },
        { id: 47, name: "7 Up Pet-35cl", price: 150, image: sevenUpPet },
        { id: 48, name: "Coca-Cola Can-33cl", price: 150, image: cokeCan },
        { id: 49, name: "Pepsi Can-33cl", price: 150, image: pepsiCan },
        { id: 50, name: "& Up Can-33cl", price: 150, image: sevenupCan },
        { id: 51, name: "Teem Bitter lemon Can-33cl", price: 150, image: teemCan },
        { id: 52, name: "Aquafina Water", price: 150, image: aquafinaWater },
        { id: 53, name: "Eva Water", price: 150, image: evaWater },
        { id: 54, name: "Sprite Can-33cl", price: 150, image: spriteCan },
        { id: 55, name: "Coke Zero Pet-33cl", price: 150, image: cokeZero },
        { id: 56, name: "Teem Bitter lemon Pet-35cl", price: 150, image: teemPet },
        { id: 57, name: "Fanta Can-33cl", price: 150, image: fantaCan },
        { id: 58, name: "Teem Tonic Can-33cl", price: 150, image: teemCan2 },
    ] }

];

export default products;