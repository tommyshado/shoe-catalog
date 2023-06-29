function ShoeCatalogApp(updatedShoesData) {
    const shoesData = updatedShoesData || [
        // converse shoes

        {
            brand: "converse",
            size: [4, 5, 8, 9],
            color: "white",
            "in-stock": 15,
            img: "../public/converse1.png",
            price: 1100,

            // shoe identifier
            id: 1,
        },

        {
            brand: "converse",
            size: [7, 8, 9, 10],
            color: "black",
            "in-stock": 5,
            img: "../public/converse2.png",
            price: 1100,

            // shoe identifier
            id: 2,
        },

        {
            brand: "converse",
            size: [7, 8, 9, 10],
            color: "white",
            "in-stock": 7,
            img: "../public/converse3.png",
            price: 1100,

            // shoe identifier
            id: 3,
        },

        {
            brand: "converse",
            size: [6, 7, 8, 9],
            color: "black",
            "in-stock": 15,
            img: "../public/converse4.png",
            price: 1399,

            // shoe identifier
            id: 4,
        },

        {
            brand: "converse",
            size: [7, 8, 9, 10],
            color: "yellow",
            "in-stock": 5,
            img: "../public/converse5.png",
            price: 1399,

            // shoe identifier
            id: 5,
        },

        // adidas shoes

        {
            brand: "adidas",
            size: [7, 8, 9, 10, 11, 12],
            color: "white",
            "in-stock": 5,
            img: "../public/adidas1.png",
            price: 1600,

            // shoe identifier
            id: 6,
        },

        {
            brand: "adidas",
            size: [7, 8, 9, 10, 11, 12, 13, 14],
            color: "white",
            "in-stock": 5,
            img: "../public/adidas2.png",
            price: 2100,

            // shoe identifier
            id: 7,
        },

        {
            brand: "adidas",
            size: [7, 8, 9, 10],
            color: "black",
            "in-stock": 5,
            img: "../public/adidas3.png",
            price: 2400,

            // shoe identifier
            id: 8,
        },

        {
            brand: "adidas",
            size: [7, 8, 9, 10],
            color: "black",
            "in-stock": 5,
            img: "../public/adidas4.png",
            price: 1600,

            // shoe identifier
            id: 9,
        },

        {
            brand: "adidas",
            size: [7, 8, 9, 10],
            color: "white",
            "in-stock": 5,
            img: "../public/adidas5.png",
            price: 2400,

            // shoe identifier
            id: 10,
        },

        // nike shoes

        {
            brand: "nike",
            size: [8, 9, 10],
            color: "white",
            "in-stock": 10,
            img: "../public/nike5.png",
            price: 2600,

            // shoe identifier
            id: 11,
        },

        // asics shoes

        {
            brand: "asics",
            size: [6, 7, 8, 9],
            color: "blue",
            "in-stock": 5,
            img: "../public/asics1.png",
            price: 1399,

            // shoe identifier
            id: 12,
        },

        {
            brand: "asics",
            size: [3, 4, 5, 6],
            color: "pink",
            "in-stock": 3,
            img: "../public/asics2.png",
            price: 1700,

            // shoe identifier
            id: 13,
        },

        {
            brand: "asics",
            size: [6, 7, 8, 9, 10, 11],
            color: "green",
            "in-stock": 4,
            img: "../public/asics3.png",
            price: 2600,

            // shoe identifier
            id: 14,
        },

        {
            brand: "asics",
            size: [6, 7, 8, 11],
            color: "purple",
            "in-stock": 5,
            img: "../public/asics4.png",
            price: 1600,

            // shoe identifier
            id: 15,
        },

        {
            brand: "asics",
            size: [5, 7, 8, 10],
            color: "orange",
            "in-stock": 2,
            img: "../public/asics5.png",
            price: 1600,

            // shoe identifier
            id: 16,
        },

        // new balance shoes

        {
            brand: "new-balance",
            size: [7, 8, 9, 10, 11, 12, 14],
            color: "black",
            "in-stock": 3,
            img: "../public/new-balance1.png",
            price: 2399,

            // shoe identifier
            id: 17,
        },

        {
            brand: "new-balance",
            size: [7, 8, 9, 10, 11, 12, 14],
            color: "grey",
            "in-stock": 7,
            img: "../public/new-balance2.png",
            price: 2500,

            // shoe identifier
            id: 18,
        },

        {
            brand: "new-balance",
            size: [8, 9, 10],
            color: "purple",
            "in-stock": 5,
            img: "../public/new-balance3.png",
            price: 2399,

            // shoe identifier
            id: 19,
        },

        {
            brand: "new-balance",
            size: [7, 8, 9, 10],
            color: "blue",
            "in-stock": 12,
            img: "../public/new-balance4.png",
            price: 2399,

            // shoe identifier
            id: 20,
        },
    ];

    // functions for the searching of a shoe in the user interface

    let shoes = [];

    function searchForShoes(shoeBrand, shoeColor, shoeSize) {
        for (let i = 0; i < shoesData.length; i++) {
            const shoe = shoesData[i];

            // case : searching for a shoe brand
            // case : searching for a shoe calor
            // case : searching for a shoe size

            if (
                (shoeBrand === shoe.brand && shoeColor === null && shoeSize === null) ||
                (shoeBrand === null && shoeColor === shoe.color && shoeSize === null) ||
                (shoeBrand === shoe.brand && shoeColor === shoe.color && shoeSize === null)
            ) {

                // I pushed the all the shoe data because I want to show the data into the screen
                shoes.push(shoe);
            };

            if (
                (shoeBrand === null && shoeColor === null && shoe.size.includes(shoeSize)) ||
                (shoeBrand === null && shoeColor === shoe.color && shoe.size.includes(shoeSize)) ||
                (shoeBrand === shoe.brand && shoeColor === shoe.color && shoe.size.includes(shoeSize))
            ) {

                // I pushed the all the shoe data because I want to show the data into the screen
                shoes.push(shoe);
            };
        };
    };

    // function to show the shoes that the user searched for

    function foundShoes() {
        /* 
            created an if statement to check the length of the shoes array if it is equal to zero, it that is true
            I will loop over the length of the that contains shoes data, shoesData object and push every shoe object that I find
        */

        if (shoes.length === 0) {
            let allOfTheShoes = [];

            for (let i = 0; i < shoesData.length; i++) {
                const shoe = shoesData[i];

                allOfTheShoes.push(shoe);
            };

            return allOfTheShoes;
        };


        // return the shoes that the user searched for

        return shoes;
    };

    // functions for the shopping cart in the user interface

    // variables to store the cost of shoes and the number of shoes added to cart
    let addedNumShoesToCart = 0;
    let shoesTotalPrice = 0;

    /* 
        addToCart() and removeFromCart() methods keep track of the number of shoes added and removed from the cart
    */

    function addToCart() {
        // increment the shopping cart by one
        addedNumShoesToCart++;
    }

    function removeFromCart() {
        // decrement the shoes added in the shopping cart by one
        if (addedNumShoesToCart > 0) addedNumShoesToCart--;
    }

    // variable to store the shoes added to cart
    let shoesInCart = [];

    function addToCartFunctionality() {
        /*
            when the user clicks the <add-to-cart> span element which will be shown everytime a user
            use a mouse to hover over the image card element in the user interface, the function inStockDecrement() 
            will decrease the "in-stock" value by one and the function addShoeCost() will add the cost of a shoe to the shoesTotalCost
        */

        function decreaseInStock(shoeIdentifier) {
            for (let i = 0; i < shoesData.length; i++) {
                const shoe = shoesData[i];

                if (shoe.id === shoeIdentifier) {
                    // decrement the "in-stock" value in the shoesData object
                    shoe["in-stock"]--;
                };
            };
        };

        function addShoeCost(shoeIdentifier) {
            for (let j = 0; j < shoesData.length; j++) {
                const shoe = shoesData[j];

                if (shoe.id === shoeIdentifier) {
                    // add the cost of a shoe to the shoesTotalCost variable by the shoe price
                    shoesTotalPrice += shoe.price;
                };
            };
        };

        function addShoeToCart(shoeIdentifier) {
            for (let k = 0; k < shoesData.length; k++) {
                const shoe = shoesData[k];

                if (shoe.id === shoeIdentifier) {
                    /* 
                        check if the shoe contained in the shoe variable is in the shoesInCart array,
                        if it is contained do not append it into the array just skip into the next element 
                        else if it is not there append it
                    */

                    if (shoesInCart.includes(shoe)) {
                        continue;
                    } else {
                        shoesInCart.push(shoe);
                    };
                };

            };
        };

        return {
            decreaseInStock,
            addShoeCost,
            addShoeToCart,
        };

    };

    function removeFromCartFunctionality() {
        /*
            when the user clicks the an icon to remove a shoe item in the shopping cart,
            the function inStockIncrement will increase the "in-stock" value in the shoesData object and the function minusShoesCost()
            will decrease the shoesTotalPrice variable by the shoe price removed from the cart
        */

        function increaseInStock(shoeIdentifier) {
            for (let i = 0; i < shoesData.length; i++) {
                const shoe = shoesData[i];

                if (shoe.id === shoeIdentifier) {
                    // increment the "in-stock" value in the shoesData object
                    shoe["in-stock"]++;
                };
            };
        };

        function minusShoeCost(shoeIdentifier) {
            for (let j = 0; j < shoesData.length; j++) {
                const shoe = shoesData[j];

                if (shoe.id === shoeIdentifier) {
                    // minus the cost of a shoe from the shoesTotalCost variable by the shoe price
                    shoesTotalPrice -= shoe.price;
                };
            };
        };

        function removeShoeFromCart(shoeIdentifier) {

            /* 
                code logic will help to remove the shoe in the user interface when the user decides to remove a shoe from
                the shopping cart
            */

            // iterate over the length of the shoesInCart array
            for (let k = 0; k < shoesInCart.length; k++) {
                // grab the current shoe object
                const shoe = shoesInCart[k];

                // check if the current shoe object id equals the one I want to decrement
                if (shoe.id === shoeIdentifier) {

                    // remove the element in the shoesInCart array that contains the shoe
                    shoesInCart.splice(k, 1);
                };
            };
        };

        return {
            increaseInStock,
            minusShoeCost,
            removeShoeFromCart,
        };
    };

    // shopping cart get functions

    function getNumAddedToCart() {
        return addedNumShoesToCart;
    };

    function getTotalShoesPrice() {
        return shoesTotalPrice;
    };

    /*
        avaliablbeShoeStock() function helps to be able to get the "in-stock" value by giving the function a 
        shoeIdentifier as an argument, so that it can can compare the shoesData object id's with the shoeIdentifier
        and get the shoe "in-stock" value when they are equal by returning it
    */

    function avaliableShoeStock(shoeIdentifier) {
        for (let i = 0; i < shoesData.length; i++) {
            const shoe = shoesData[i];

            if (shoe.id === shoeIdentifier) {
                return shoe["in-stock"];
            };
        };
    };

    // get shoes that are added to the cart to show the added shoes in the shopping cart page

    function shoesAddedToCart() {
        return shoesInCart;
    };



    // get function for setting the shoes data in the local storage

    function getShoesData() {
        return shoesData;
    };


    // functions return 

    return {

        // shopping cart return functions
        addToCart,
        removeFromCart,
        addToCartFunctionality,
        removeFromCartFunctionality,
        getNumAddedToCart,
        getTotalShoesPrice,
        avaliableShoeStock,
        shoesAddedToCart,

        // searching of a shoe functions
        searchForShoes,
        foundShoes,

        // local storage function
        getShoesData,
    };
};