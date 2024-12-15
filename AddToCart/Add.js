const menuItemsContainer = document.getElementById('menu-items');

const menuData = {
    breakfast: [
        {
            name: 'Pancakes',
            description: 'Fluffy pancakes served with maple syrup, fresh berries, and a dollop of whipped cream.',
            price: '107.99',
            image: 'https://plus.unsplash.com/premium_photo-1663854478296-dd00b6257021?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFuY2FrZXN8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'French Toast',
            description: 'Golden slices of bread soaked in egg mixture, topped with powdered sugar and fresh fruit.',
            price: '80.99',
            image: 'https://plus.unsplash.com/premium_photo-1663840225558-03ac41c68873?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RnJlbmNoJTIwdG9hc3R8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Omelette',
            description: 'A fluffy omelette filled with cheese, mushrooms, spinach, and bell peppers.',
            price: '169.99',
            image: 'https://plus.unsplash.com/premium_photo-1667807521536-bc35c8d8b64b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Greek Yogurt Parfait',
            description: 'Layers of Greek yogurt, granola, and mixed berries, drizzled with honey.',
            price: '255.99',
            image: 'https://plus.unsplash.com/premium_photo-1663855531486-b8574bc255e0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8R3JlZWslMjBZb2d1cnQlMjBQYXJmYWl0fGVufDB8fDB8fHww'
        },
        {
            name: 'Avocado Toast',
            description: 'Toasted bread topped with mashed avocado, chili flakes, and a poached egg.',
            price : '856.99',
            image: 'https://images.unsplash.com/photo-1687276287139-88f7333c8ca4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QXZvY2FkbyUyMFRvYXN0fGVufDB8fDB8fHww'
        },
        {
            name: 'Smoothie Bowl',
            description: 'A thick blend of frozen fruits and yogurt, topped with granola and fresh fruit.',
            price : '257.49',
            image: 'https://plus.unsplash.com/premium_photo-1663840135654-b4119f34a720?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U21vb3RoaWUlMjBCb3dsfGVufDB8fDB8fHww'
        },
        {
            name: 'Breakfast Sandwich',
            description: 'A sandwich with eggs, bacon or sausage, and cheese on a toasted muffin or bagel.',
            price: '255.99',
            image: 'https://images.unsplash.com/photo-1604467707321-70d5ac45adda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8c2FuZHdpY2h8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Waffles',
            description: 'Golden waffles topped with whipped cream, chocolate syrup, and a sprinkle of nuts.',
            price : '58.99',
            image: 'https://plus.unsplash.com/premium_photo-1664478298438-360c93ff1e51?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d2FmZmxlc3xlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Tofu Scramble',
            description: 'Tofu scrambled with turmeric, veggies, and nutritional yeast, served with toast.',
            price : '856.99',
            image: 'https://plus.unsplash.com/premium_photo-1694670233199-77b204d60606?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dG9mdSUyMHNjcmFtYmxlfGVufDB8fDB8fHww'
        },
        {
            name: 'Rainbow Fruit Salad',
            description: 'A colorful mix of seasonal fruits with a honey-lime dressing.',
            price : '254.99',
            image: 'https://plus.unsplash.com/premium_photo-1690272335076-01cfb86f8ac2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8UmFpbmJvdyUyMEZydWl0JTIwU2FsYWR8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Breakfast Pizza',
            description: 'Pizza crust topped with scrambled eggs, cheese, and bacon bits.',
            price : '458.99',
            image: 'https://images.unsplash.com/photo-1523476467467-16477f18dba0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
        },
        {
            name: 'Masala Dosa',
            description: 'A crispy rice pancake filled with spiced potato filling, served with coconut chutney and sambar.',
            price : '256.99',
            image: 'https://images.unsplash.com/photo-1694849789325-914b71ab4075?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8TWFzYWxhJTIwRG9zYXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Poha',
            description: 'Flattened rice cooked with onions, peas, and spices, garnished with fresh coriander and lemon.',
            price :'74.99',
            image: 'https://images.pexels.com/photos/13063292/pexels-photo-13063292.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Aloo Paratha',
            description: 'Indian flatbread stuffed with spiced mashed potatoes, served with yogurt and pickle.',
            price : '85.99',
            image: 'https://images.pexels.com/photos/12737919/pexels-photo-12737919.jpeg?auto=compress&cs=tinysrgb&w=600'
        }
    ],
    lunch: [
        {
            name: 'Grilled Chicken Salad',
            description: 'Grilled chicken served on a bed of fresh greens.',
            price : '158.99',
            image: 'https://images.unsplash.com/photo-1580917109855-6817741b51e4?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R3JpbGxlZCUyMENoaWNrZW4lMjBTYWxhZHxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Spaghetti Carbonara',
            description: 'Creamy pasta with bacon and Parmesan cheese.',
            pricce : '310.99',
            image: 'https://images.pexels.com/photos/5710178/pexels-photo-5710178.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
        },
        {
            name: 'Butter Chicken',
            description: 'Tender chicken cooked in a creamy tomato sauce, served with naan or rice.',
            price : '362.99',
            image: 'https://images.pexels.com/photos/7625056/pexels-photo-7625056.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Paneer Tikka Masala',
            description: 'Grilled paneer cubes cooked in a spiced tomato gravy, served with rice or naan.',
            price : '211.49',
            image: 'https://images.pexels.com/photos/9609838/pexels-photo-9609838.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Biryani',
            description: 'Fragrant basmati rice cooked with marinated chicken or vegetables, served with raita.',
            price : '510.99',
            image: 'https://images.pexels.com/photos/7837978/pexels-photo-7837978.jpeg?auto=compress&cs=tinysrgb&w=600'

        },
        {
            name: 'Chole Bhature',
            description: 'Spicy chickpeas served with deep-fried bread (bhature), a North Indian classic.',
            price : '259.99',
            image: 'https://media.istockphoto.com/id/2171165087/photo/chole-bhature-is-a-north-indian-famous-food-dish-a-combination-of-chana-masala-and-bhatura-or.webp?a=1&b=1&s=612x612&w=0&k=20&c=JJsVNh4I7Ff5YnvNChaX0KDAZi7pwl46odgzK9lqLJA='
            
        },
        {
            name: 'Masala Dosa',
            description: 'Crispy rice crepe filled with spiced potatoes, served with chutney and sambar.',
            price : '258.49',
            image: 'https://images.unsplash.com/photo-1668236543090-82eba5ee5976?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bWFzYWxhJTIwZG9zYXxlbnwwfHwwfHx8MA%3D%3D'
            
        },
        {
            name: 'Palak Paneer',
            description: 'Paneer cubes in a smooth spinach gravy, served with roti or rice.',
            price : '510.49',
            image: 'https://images.unsplash.com/photo-1589647363585-f4a7d3877b10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8UGFsYWslMjBQYW5lZXJ8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Aloo Gobi',
            description: 'Spiced potatoes and cauliflower cooked with Indian spices, served with rice or roti.',
            price : '58.99',
            image: 'https://images.unsplash.com/photo-1652545296893-ff9227b3512e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8QWxvbyUyMEdvYml8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Chicken Tikka',
            description: 'Marinated chicken pieces grilled to perfection, served with mint chutney.',
            price : '2511.99',
            image: 'https://plus.unsplash.com/premium_photo-1695931841253-1e17e7ed59b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHRpa2thfGVufDB8fDB8fHww'
        },
        {
            name: 'Egg Curry',
            description: 'Hard-boiled eggs cooked in a spicy onion-tomato gravy, served with rice.',
            price : '259.49',
            image: 'https://media.istockphoto.com/id/1326412463/photo/fried-egg-curry-or-anda-masala-served-in-a-black-bowl-and-copy-space.webp?a=1&b=1&s=612x612&w=0&k=20&c=xvCo3BHgWwdWLDjlVro4WrSEWw5bDmFY1wSHk3xrZ64='
        },
        {
            name: 'Pav Bhaji',
            description: 'Spiced vegetable mash served with buttered bread rolls, a Mumbai street food favorite.',
            price : '57.99',
            image: 'https://images.unsplash.com/photo-1619193099598-6856ec4e2a87?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8UGF2JTIwQmhhaml8ZW58MHx8MHx8fDA%3D'
        },
        
    ],
    dinner: [
        {
            name: 'Sweet and Sour Pork',
            description: 'Pork cooked in a sweet and tangy sauce, served with rice.',
            price:'813.49',
            image: 'https://images.pexels.com/photos/28460873/pexels-photo-28460873/free-photo-of-delicious-steamed-bao-buns-with-sauces.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Vegetable Fried Rice',
            description: 'Stir-fried rice with mixed vegetables, soy sauce, and sesame oil.',
            price:'210.99',
            image: 'https://images.pexels.com/photos/28399702/pexels-photo-28399702/free-photo-of-fried-rice-with-chicken-meat-topping.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Chicken Biryani',
            description: 'Fragrant basmati rice layered with marinated chicken and spices, served with raita.',
            price:'513.99',
            image: 'https://images.pexels.com/photos/4439740/pexels-photo-4439740.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Malai Kofta',
            description: 'Fried dumplings made from paneer and vegetables, served in a creamy gravy.',
            price:'281.49',
            image: 'https://media.istockphoto.com/id/1219174102/photo/malai-kofta-curry-in-black-bowl-isolated-on-white-background-malai-kofta-is-indian-cuisine.webp?a=1&b=1&s=612x612&w=0&k=20&c=UfE_wfnpR0dvev1r02gz3dv5K9xPtJMadxSJ5y3nyl8='
        },
        {
            name: 'Lasagna',
            description: 'Layered pasta with ground meat, béchamel, and cheese.',
            price:'2512.99',
            image: 'https://plus.unsplash.com/premium_photo-1671559021019-0268c54511b8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8TGFzYWduYXxlbnwwfHwwfHx8MA%3D%3D'
        },
        {
            name: 'Pesto Pasta',
            description: 'Pasta tossed in a fresh basil pesto sauce with pine nuts and Parmesan.',
            price:'510.49',
            image: 'https://images.unsplash.com/photo-1671442131445-a99f2e59850a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8UGVzdG8lMjBQYXN0YXxlbnwwfHwwfHx8MA%3D%3D  '
        },
        {
            name: 'Chili Chicken',
            description: 'Spicy fried chicken tossed in a chili sauce, served with fried rice.',
            price: '511.99',
            image: 'https://images.pexels.com/photos/5339083/pexels-photo-5339083.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
       

    ],
    snacks:[
        {
            name: 'Samosa',
            description: 'Crispy pastry filled with spiced potatoes and peas, served with chutney.',
            price: '53.99',
            image: 'https://images.pexels.com/photos/14477873/pexels-photo-14477873.jpeg?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Paneer Tikka',
            description: 'Grilled cubes of marinated paneer, served with mint chutney.',
            price: '255.49',
            image: 'https://images.pexels.com/photos/3928854/pexels-photo-3928854.png?auto=compress&cs=tinysrgb&w=600'
        },
        {
            name: 'Dhokla',
            description: 'Steamed savory cake made from gram flour, garnished with mustard seeds and coriander.',
            price: '254.99',
            image: 'https://media.istockphoto.com/id/2157592738/photo/mouthwatering-freshly-made-dhokla.webp?a=1&b=1&s=612x612&w=0&k=20&c=qjQVymnbSR_JWwVrZJoMf3Xlc5hi2U2GeH-xm9ldlVs='
        },
        {
            name: 'Pav Bhaji',
            description: 'Spicy mashed vegetable curry served with buttered bread rolls.',
            price: '56.99',
            image: 'https://images.unsplash.com/photo-1619193099710-e54f2e2f1b28?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cGF2JTIwYmhhaml8ZW58MHx8MHx8fDA%3D'
        },
        
        // Chinese Snacks
        {
            name: 'Spring Rolls',
            description: 'Crispy rolls filled with vegetables or meat, served with sweet chili sauce.',
            price: '284.49',
            image: 'https://images.unsplash.com/photo-1695712641569-05eee7b37b6d?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U3ByaW5nJTIwUm9sbHN8ZW58MHx8MHx8fDA%3D'
        },
        {
            name: 'Dumplings',
            description: 'Steamed or fried dumplings filled with meat or vegetables.',
            price: '285.99',
            image: 'https://plus.unsplash.com/premium_photo-1673769108039-d6bdbccb85ed?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8RHVtcGxpbmdzfGVufDB8fDB8fHww'
        },
        {
            name: 'Szechuan Noodles',
            description: 'Spicy stir-fried noodles with vegetables and Szechuan sauce.',
            price: '286.49',
            image: 'https://images.pexels.com/photos/5104185/pexels-photo-5104185.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        
        // Italian Snacks
        {
            name: 'Bruschetta',
            description: 'Grilled bread topped with fresh tomatoes, basil, and mozzarella.',
            price: '5.49',
            image: 'https://images.pexels.com/photos/5638331/pexels-photo-5638331.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            name: 'Caprese Skewers',
            description: 'Skewers with fresh mozzarella, tomatoes, and basil drizzled with balsamic glaze.',
            price: '6.99',
            image: 'https://images.pexels.com/photos/28573008/pexels-photo-28573008/free-photo-of-delicious-asian-fusion-bowl-with-grilled-skewers.jpeg?auto=compress&cs=tinysrgb&w=400'
        },
        {
            name: 'Garlic Bread',
            description: 'Toasted bread with garlic butter and herbs.',
            price: '3.99',
            image: 'https://images.unsplash.com/photo-1573140401552-3fab0b24306f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8R2FybGljJTIwQnJlYWR8ZW58MHx8MHx8fDA%3D'
        },

    ]
};


// Initialize cart from localStorage
let cart = JSON.parse(localStorage.getItem('cart')) || []; 

// Function to add item to cart
function addToCart(item) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(item); // Add the new item to the cart
    localStorage.setItem('cart', JSON.stringify(cart)); // Save the updated cart to localStorage
    // updateCartCount(); // Update cart count in the navbar
    alert(`${item.name} has been added to your cart!`); // Confirmation message
}


// Function to show menu items
function showMenu(category) {
    menuItemsContainer.innerHTML = ''; // Clear the container
    const selectedMenu = menuData[category];

    selectedMenu.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('food-item');
        itemElement.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>${item.description}</p>
            <p class="price">${item.price}</p>
            <button class="add-to-cart-btn" data-name="${item.name}" data-price="${item.price}" data-description="${item.description}" data-image="${item.image}">Add to Cart</button>
        `;
        
        // Add event listener for "Add to Cart"
        const addToCartBtn = itemElement.querySelector('.add-to-cart-btn');
        addToCartBtn.addEventListener('click', function(event) {
            const cartItem = {
                name: item.name,
                price: item.price,
                description: item.description,
                image: item.image
            };
            addToCart(cartItem); // Call the function to add item to cart
        });

        menuItemsContainer.appendChild(itemElement);
    });
}

// Function to update the cart count (example implementation)
// Function to update cart count
// function updateCartCount() {
//     const cart = JSON.parse(localStorage.getItem('cart')) || [];
//     const cartCount = document.getElementById('AddTOCart');
//     cartCount.innerHTML = Cart (${cart.length}); // Update cart count
// }

// Initially show breakfast menu
showMenu('breakfast');

function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}

function hideSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = 'none';
}