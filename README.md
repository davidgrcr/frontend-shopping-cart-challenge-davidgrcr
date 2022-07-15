# Frontend shopping cart challenge

### Prerequisite

```
Vite requires Node.js version >=14.18.0. 
However, some templates require a higher Node.js version to work, please upgrade if your package manager warns about it.
```
### About the project

As you already know, besides providing exceptional transportation services, Cabify also runs a physical store which sells (only) 3 products:

![image](https://user-images.githubusercontent.com/6493960/179278822-52f2f61c-0c9e-4654-a228-81468cd9f306.png)

Current stock consists of the following products:

Code         | Name                |  Price
-------------------------------------------------
TSHIRT       | Cabify T-Shirt      |  20.00€
MUG          | Cabify Coffee Mug   |   5.00€
CAP          | Cabify Cap          |  10.00€


We allow the users the possibility of having some discounts applied when combining the products in the following ways:

2-for-1 promotions: (for MUG items). Buy two of them, get one free. (e.g: pay 10€ for 4 mugs)
Bulk discounts: (for TSHIRT items). Buying 3 or more of this product, the price per unit is reduced by 5%. (e.g: if you buy 3 or more TSHIRT items, the price per unit should be 19.00€)

When clicking on a certain product, a modal should show up with the details of the said item.

![image](https://user-images.githubusercontent.com/6493960/179280252-c8cbcb7f-be66-4777-8d00-cc3d2c3b24dd.png)


### Built With

* [React.js](https://reactjs.org/)
* [TypeScript](https://www.typescriptlang.org/)
* [Vite](https://vitejs.dev/)
* [zustand](https://zustand.surge.sh/)
* [vitest](https://vitest.dev/)
* [Testing Library](https://testing-library.com/)


<!-- GETTING STARTED -->
## Getting Started

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/davidgrcr/frontend-shopping-cart-challenge-davidgrcr.git
   ```
2. Install NPM packages
   ```sh
   npm install
   ```
 
3. Run the development server
   
    ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
   
    
4. Launches the test runner
   
    ```sh
   npm run test
   ```


