import React from 'react'
import 'boxicons'

function Header() {
    function IconWithBadge({ icon, count }) {
        return (
            <div className="relative">
                <box-icon name={icon}></box-icon>
                {count > 0 && (
                    <span className="absolute -top-1 -right-2 bg-green-500 text-white text-xs w-4 h-4 flex items-center justify-center rounded-full">
                        {count}
                    </span>
                )}
            </div>
        );
    }

    let headcategory = [
        {
            category: 'Footwear',
            brands: ['Nike', 'Adidas', 'Puma'],
        },
        {
            category: 'Clothing',
            brands: ['Zara', 'H&M', 'Uniqlo'],
        },
        {
            category: 'Accessories',
            brands: ['Fossil', 'Ray-Ban', 'Casio'],
        },
        {
            category: 'Electronics',
            brands: ['Apple', 'Samsung', 'Sony'],
        },
        {
            category: 'Home & Living',
            brands: ['IKEA', 'Philips', 'Panasonic'],
        },
    ];


    return (
        <>
            <div className="w-full bg-[#F8F8F8] p-1 flex justify-center items-center">
                <div className="w-[90%] h-full flex items-center justify-between">
                    <div className=''>
                        <a id='head-link' href="#">
                            <box-icon color="#7E7E7E" name='map'></box-icon>
                        </a>
                    </div>
                    <div id='' className="flex items-center justify-between gap-5">
                        <a id='head-link' href="#">
                            <box-icon color="#7E7E7E" name='instagram' type='logo' ></box-icon>
                        </a>
                        <a id='head-link' href="#">
                            <box-icon color="#7E7E7E" name='facebook' type='logo' ></box-icon>
                        </a>
                        <a id='head-link' href="#">
                            <box-icon color="#7E7E7E" name='youtube' type='logo' ></box-icon>
                        </a>
                        <a id='head-link' href="#">
                            <box-icon color="#7E7E7E" name='twitter' type='logo' ></box-icon>
                        </a>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center py-3 shadow-sm bg-white">
                <div className="w-[90%] flex items-center justify-between bg-white">
                    <div className="flex items-center gap-2">
                        <img src="https://www.shutterstock.com/image-vector/stylized-black-dragon-logo-icon-600nw-2501364055.jpg" alt="logo" className="w-16 object-cover" />
                        <span className="font-bold text-xl">TeeSpace</span>
                    </div>
                    <div className="flex flex-1 mx-10 max-w-xl">
                        <input
                            type="text"
                            placeholder="What are you looking for?"
                            className="w-full px-4 py-2 border rounded-l-full focus:outline-none"
                        />
                        <button className="bg-black text-white px-5 rounded-r-full hover:bg-gray-800">
                            Search
                        </button>
                    </div>
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <box-icon name="phone" color="#9ca3af"></box-icon>
                            <div className="text-sm">
                                <div className="text-gray-900 font-bold">Hotline: 19008188</div>
                                <div className="text-gray-400">Pickup your order for free</div>
                            </div>
                        </div>
                        <div className="flex items-center gap-5 text-gray-700">
                            <a href="#" className='hover:-translate-y-1 duration-300 ease-in'>
                                <IconWithBadge icon="user" count={1} />
                            </a>
                            <a href="#" className='hover:-translate-y-1 duration-300 ease-in'>
                                <IconWithBadge icon="heart" count={10} />
                            </a>
                            <a href="#" className='hover:-translate-y-1 duration-300 ease-in'>
                                <IconWithBadge icon="shopping-bag" count={4} />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex items-center justify-center h-[100px] bg-[#F8F8F8]">
                <div className="w-[50%] flex items-center justify-center gap-5 h-full">
                    {
                        headcategory.map((item, index) => {
                            return (
                                <select key={item} name="" id="selectOption" className="flex-1 h-auto border-1 rounded-3xl border-none p-2 hover:flex-2 duration-500 eyse-in">
                                    <option value="">{item.category}</option>
                                    {
                                        item.brands.map((brandItem, brandIndex) => (
                                            <option key={brandIndex} value={brandItem} className='bg-gray-800 text-white hover:bg-gray-700'>{brandItem}</option>
                                        ))
                                    }
                                </select>
                            );
                        })
                    }
                </div>

            </div>
        </>
    )
}

export default Header
