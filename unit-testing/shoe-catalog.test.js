describe("Shoe Catalog App Unit Testing", function () {

    let appInstance;

    beforeEach(function () {
        appInstance = ShoeCatalogApp();
    });

    describe("Search for shoes feature logic unit testing", function () {

        it("should be able to search for a shoe when given a shoe brand", function () {
            appInstance.searchForShoes("adidas", '', '');

            assert.deepEqual(
                [
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
                ],
                appInstance.foundShoes()
            );
        });

        it("should be able to search for a shoe when given a shoe color", function () {
            appInstance.searchForShoes('', "purple", '');

            assert.deepEqual(
                [
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
                        brand: "new-balance",
                        size: [8, 9, 10],
                        color: "purple",
                        "in-stock": 5,
                        img: "../public/new-balance3.png",
                        price: 2399,

                        // shoe identifier
                        id: 19,
                    },
                ], appInstance.foundShoes());
        });

        it("should be able to search for a shoe when given a shoe size", function () {
            appInstance.searchForShoes('', '', 12);

            assert.deepEqual(
                [
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
                ],
                appInstance.foundShoes()
            );
        });

        it("should be able to search for a shoe when given a shoe size and a shoe color", function () {
            appInstance.searchForShoes('', "pink", 6);

            assert.deepEqual(
                [
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
                ], appInstance.foundShoes());
        });

        it("should be able to search for a shoe when given a shoe brand, color and size", function () {
            appInstance.searchForShoes("new-balance", "grey", 10);

            assert.deepEqual(
                [
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
                ],
                appInstance.foundShoes()
            );
        });

        it("should be able to show all the shoes when a shoe brand, color and size is not selected", function () {
            assert.deepEqual(
                [
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
                ],
                appInstance.foundShoes()
            );
        });
    });


    describe("Shopping cart feature unit testing", function () {

        it("should be able to add shoes to the cart and decrease the number of the shoes in stock when given a shoe id", function () {
            // adding to the shopping cart when given...

            // one shoe
            appInstance.addShoeToCart(2);
            appInstance.addShoeToCart(2);

            // another shoe
            appInstance.addShoeToCart(3);
            appInstance.addShoeToCart(3);


            // number of shoes added in the shopping cart
            assert.equal(4, appInstance.addedToCart());

            // availableInStock() method checks the stock available after we added to the shopping cart

            // available shoes for shoe id
            assert.equal(3, appInstance.avaliableShoeStock(2));

            // available shoes for shoe id
            assert.equal(5, appInstance.avaliableShoeStock(3));

        });

        it("should be able to calculate the total price of the shoes added to the cart when given a shoe id", function () {
            // calculating the total shoes price for...

            // one shoe
            appInstance.addShoeToCart(2)
            appInstance.addShoeToCart(2)

            // another shoe
            appInstance.addShoeToCart(3)
            appInstance.addShoeToCart(3)

            assert.equal(4400, appInstance.getTotalShoesPrice());

        });

        it("should be able to remove shoes from the shoping cart and increase the number of the shoes in stock", function () {
            // adding to the shopping cart when given...

            // one shoe
            appInstance.addShoeToCart(2);
            appInstance.addShoeToCart(2);

            // another shoe
            appInstance.addShoeToCart(3);
            appInstance.addShoeToCart(3);

            // removing shoes from the shopping cart

            appInstance.removeShoeFromCart(2);
            appInstance.removeShoeFromCart(3);


            // number of shoes in the shopping cart
            assert.equal(2, appInstance.addedToCart());

            // assert for shoe identifier 2
            assert.equal(4, appInstance.avaliableShoeStock(2));

            // assert for shoe identifier 3
            assert.equal(6, appInstance.avaliableShoeStock(3));

        });

        it("should be able to remove shoes from the shopping cart, increase the number of the shoes in stock and minus the total shoe cost by the shoe price", function () {
            // adding to the shopping cart when given...

            // one shoe
            appInstance.addShoeToCart(2);
            appInstance.addShoeToCart(2);

            // another shoe
            appInstance.addShoeToCart(3);
            appInstance.addShoeToCart(3);

            // removing shoes from the shopping cart

            appInstance.removeShoeFromCart(2);
            appInstance.removeShoeFromCart(2);

            appInstance.removeShoeFromCart(3);
            appInstance.removeShoeFromCart(3);

            // number of shoes in the shopping cart
            assert.equal(0, appInstance.addedToCart());

            // assert for shoe identifier 2
            assert.equal(5, appInstance.avaliableShoeStock(2));

            // assert for shoe identifier 3
            assert.equal(7, appInstance.avaliableShoeStock(3));

            // shoe total cost
            assert.equal(0, appInstance.getTotalShoesPrice());
        });

        it("should be able to show the shoes added to cart when the user navigate into the shopping cart page in the application", function () {
            appInstance.addShoeToCart(2);
            appInstance.addShoeToCart(3);
            appInstance.addShoeToCart(6);

            assert.deepEqual([
                {
                    brand: "converse",
                    size: [7, 8, 9, 10],
                    color: "black",
                    "in-stock": 4,
                    img: "../public/converse2.png",
                    price: 1100,

                    // shoe identifier
                    id: 2,
                },
                {
                    brand: "converse",
                    size: [7, 8, 9, 10],
                    color: "white",
                    "in-stock": 6,
                    img: "../public/converse3.png",
                    price: 1100,

                    // shoe identifier
                    id: 3,
                },
                {
                    brand: "adidas",
                    size: [7, 8, 9, 10, 11, 12],
                    color: "white",
                    "in-stock": 4,
                    img: "../public/adidas1.png",
                    price: 1600,

                    // shoe identifier
                    id: 6,
                },
            ], appInstance.shoesAddedToCart());

        });

        it("should be able to remove the shoes added to cart when the user navigate into the shopping cart page in the application and removes a shoe", function () {
            // adding shoes to the shopping cart

            appInstance.addShoeToCart(2);
            appInstance.addShoeToCart(3);
            appInstance.addShoeToCart(6);

            // removing shoes from the shopping cart

            appInstance.removeShoeFromCart(2);

            assert.deepEqual([
                {
                    brand: "converse",
                    size: [7, 8, 9, 10],
                    color: "white",
                    "in-stock": 6,
                    img: "../public/converse3.png",
                    price: 1100,

                    // shoe identifier
                    id: 3,
                },
                {
                    brand: "adidas",
                    size: [7, 8, 9, 10, 11, 12],
                    color: "white",
                    "in-stock": 4,
                    img: "../public/adidas1.png",
                    price: 1600,

                    // shoe identifier
                    id: 6,
                },
            ], appInstance.shoesAddedToCart());

        });

        it("should be able to remove more shoes added to cart when the user navigate into the shopping cart page in the application and removes a shoe", function () {
            // adding shoes to the shopping cart

            appInstance.addShoeToCart(2);
            appInstance.addShoeToCart(3);
            appInstance.addShoeToCart(6);
            appInstance.addShoeToCart(7);
            appInstance.addShoeToCart(10);
            appInstance.addShoeToCart(12);

            // removing shoes from the shopping cart

            appInstance.removeShoeFromCart(2);
            appInstance.removeShoeFromCart(10);
            appInstance.removeShoeFromCart(12);

            assert.deepEqual([
                {
                    brand: "converse",
                    size: [7, 8, 9, 10],
                    color: "white",
                    "in-stock": 6,
                    img: "../public/converse3.png",
                    price: 1100,

                    // shoe identifier
                    id: 3,
                },
                {
                    brand: "adidas",
                    size: [7, 8, 9, 10, 11, 12],
                    color: "white",
                    "in-stock": 4,
                    img: "../public/adidas1.png",
                    price: 1600,

                    // shoe identifier
                    id: 6,
                },
                {
                    brand: "adidas",
                    size: [7, 8, 9, 10, 11, 12, 13, 14],
                    color: "white",
                    "in-stock": 4,
                    img: "../public/adidas2.png",
                    price: 2100,

                    // shoe identifier
                    id: 7,
                },
            ], appInstance.shoesAddedToCart());

        });
    });

});