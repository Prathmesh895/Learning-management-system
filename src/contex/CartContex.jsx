"use client";
import { useRouter } from "next/navigation";
import { createContext, useState, useEffect } from "react";

const Cartcontex = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const router = useRouter();

  useEffect(() => {
    setCartToState();
  }, []);

  const setCartToState = () => {
    setCart(
      localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []
    );
  };

  const addCourseToCart = async ({
    course,
    title,
    price,
    category,
    quantity = 1,
  }) => {
    const Courses = {
      course,
      title,
      price,
      category,
      quantity,
    };

    const isCourseExists = cart?.cartCourse?.find(
      (i) => i.course === Courses.course
    );

    let newCourse;
    if (isCourseExists) {
      newCourse = cart?.cartCourse?.map((i) =>
        i.course === isCourseExists.course ? Courses : i
      );
    } else {
      newCourse = [...(cart?.cartCourse || []), Courses];
    }

    localStorage.setItem("cart", JSON.stringify({ cartCourse: newCourse }));
    setCartToState();
  };

  return (
    <Cartcontex.Provider
      value={{
        cart,
        addCourseToCart,
      }}
    >
      {children}
    </Cartcontex.Provider>
  );
};

export default Cartcontex;
