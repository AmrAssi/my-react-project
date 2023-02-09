import {
  addDoc,
  collection,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { db } from "../firebase-config";

const CourseModal = ({ addCourseBox, control, editedCourse }) => {
  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [inStock, setInStock] = useState(false);
  const [errors, setErrors] = useState({});

  const [categories, setCategories] = useState([]);

  const categoriesCollectionRef = collection(db, "categories");
  const coursesCollectionRef = collection(db, "courses");

  // set edited course
  useEffect(() => {
    if (editedCourse?.id) {
      const { title, thumbnail, category, price, description, inStock } =
        editedCourse || {};
      setTitle(title);
      setThumbnail(thumbnail);
      setCategory(category);
      setPrice(price);
      setDescription(description);
      setInStock(inStock);
    }
  }, [editedCourse]);

  // get categories
  useEffect(() => {
    const getCategories = async () => {
      const data = await getDocs(categoriesCollectionRef);
      setCategories(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getCategories();
  }, [categoriesCollectionRef]);

  // create new course
  const createCourse = async () => {
    try {
      const res = await addDoc(coursesCollectionRef, {
        title: title,
        thumbnail: thumbnail,
        category: category,
        price: String(price),
        description: description,
        inStock: Boolean(inStock),
      });

      if (Object.keys(res).length > 0) {
        toast.success("Add New Course Successfully");
        control();
        setTitle("");
        setThumbnail("");
        setCategory("");
        setDescription("");
        setPrice("");
        setInStock(false);
      }
    } catch (err) {
      console.log("err", err);
    }
  };

  // udpate course
  const updateCourse = async () => {
    const courseDoc = doc(db, "courses", editedCourse?.id);

    await updateDoc(courseDoc, {
      title,
      thumbnail,
      category,
      price,
      description,
      inStock,
    });

    toast.success("Course Updated Successfully");
    control();
    setTitle("");
    setThumbnail("");
    setCategory("");
    setDescription("");
    setPrice("");
    setInStock(false);
  };

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationError = {};

    if (!title) {
      validationError.title = "Title is required!!";
    }

    if (!thumbnail) {
      validationError.thumbnail = "Course thumbnail is required!!";
    }

    if (!category) {
      validationError.category = "Category is required!!";
    }

    if (!price) {
      validationError.price = "Price is required!!";
    }

    if (!description) {
      validationError.description = "Description is required!!";
    }

    if (Object.keys(validationError).length > 0) {
      setErrors(validationError);
      return;
    }

    if (editedCourse?.id) {
      updateCourse();
    } else {
      createCourse();
    }
  };
  return (
    <div
      className={`transition-all duration-500 ${
        addCourseBox ? "scale-100" : "scale-0"
      } fixed top-0 left-0 right-0 bottom-0 w-full min-h-full bg-black/80 flex items-center justify-center z-50`}
    >
      <div className="bg-white p-11 rounded-lg w-[700px]">
        <h3 className="text-[28px] text-[#140342] font-bold">
          {editedCourse?.id ? "Update Your Course" : "Add New Course"}
        </h3>

        <form onSubmit={submitHandler}>
          <div className="mt-5 flex flex-col gap-5">
            <div>
              <label
                className="text-base text-[#140342] font-medium inline-block"
                htmlFor="title"
              >
                Course Title
              </label>
              <input
                className="block w-full border rounded-md px-5 py-3 outline-none focus:ring-1 mt-2"
                type="text"
                id="title"
                placeholder="Enter your course title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              {errors?.title && (
                <div>
                  <p className="mt-2 text-red-600 font-medium">
                    {errors?.title}
                  </p>
                </div>
              )}
            </div>
            <div>
              <label
                className="text-base text-[#140342] font-medium inline-block"
                htmlFor="thumbnail"
              >
                Course Thumbnail URL
              </label>
              <input
                className="block w-full border rounded-md px-5 py-3 outline-none focus:ring-1 mt-2"
                type="url"
                id="thumbnail"
                placeholder="Enter your course thumbnail url"
                value={thumbnail}
                onChange={(e) => setThumbnail(e.target.value)}
              />
              {errors?.thumbnail && (
                <div>
                  <p className="mt-2 text-red-600 font-medium">
                    {errors?.thumbnail}
                  </p>
                </div>
              )}
            </div>
            <div>
              <label
                className="text-base text-[#140342] font-medium inline-block"
                htmlFor="category"
              >
                Select Category
              </label>
              <select
                className="block w-full border rounded-md px-5 py-3 outline-none focus:ring-1 mt-2"
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                <option value="">Select Course Category</option>
                {categories?.map((category) => (
                  <option
                    selected={category === category?.name}
                    key={category?.id}
                    value={category?.name}
                  >
                    {category?.name}
                  </option>
                ))}
              </select>
              {errors?.category && (
                <div>
                  <p className="mt-2 text-red-600 font-medium">
                    {errors?.category}
                  </p>
                </div>
              )}
            </div>
            <div>
              <label
                className="text-base text-[#140342] font-medium inline-block"
                htmlFor="price"
              >
                Course Price
              </label>
              <input
                className="block w-full border rounded-md px-5 py-3 outline-none focus:ring-1 mt-2"
                type="number"
                id="price"
                placeholder="Enter your course price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              {errors?.price && (
                <div>
                  <p className="mt-2 text-red-600 font-medium">
                    {errors?.price}
                  </p>
                </div>
              )}
            </div>
            <div>
              <label
                className="text-base text-[#140342] font-medium inline-block"
                htmlFor="description"
              >
                Course Description
              </label>
              <textarea
                className="block w-full border rounded-md px-5 py-3 outline-none focus:ring-1 mt-2 h-[120px]"
                id="description"
                placeholder="Enter your course description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              {errors?.description && (
                <div>
                  <p className="mt-2 text-red-600 font-medium">
                    {errors?.description}
                  </p>
                </div>
              )}
            </div>
            <div className="flex items-center gap-2">
              <input type="checkbox" id="stock" />
              <label
                className="text-base text-[#140342] font-medium inline-block"
                htmlFor="stock"
                onChange={(e) => setInStock(e.target.checked)}
                defaultChecked={inStock}
              >
                In Stock
              </label>
            </div>
            <div className="flex items-center gap-3">
              <button
                className="py-2 px-6 rounded-md border border-[#140342] bg-[#140342] text-white transition-all hover:bg-transparent hover:text-[#140342]"
                type="submit"
              >
                {editedCourse?.id ? "Update Course" : "Add Course"}
              </button>
              <div
                className="py-2 px-6 rounded-md border border-red-600 transition-all bg-red-600 text-white hover:bg-transparent hover:text-red-600 cursor-pointer"
                onClick={control}
              >
                Close
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CourseModal;
