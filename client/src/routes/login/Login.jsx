import React, { useEffect, useState } from "react";
import sirImg from "../../assets/sirImg.png";
import apiRequest from "../../lib/apiRequest";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import "./login.css"

const Login = () => {

  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(()=>{
    if(localStorage.getItem("user")){
      navigate("/profile")
    }
  },[])

  const handleLogin = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const password = formData.get("password");
    // console.log(username)
    // console.log(password)

    try {
      setLoading(true);
      const res = await apiRequest.post("/auth/login", {
        username,
        password,
      });
      // Set user info in local storage
      localStorage.setItem("user", "Admin Logged In");
      navigate("/profile");

      toast.success("Logged in successfully");
    } catch (error) {
      console.log(error);
      toast.error("Failed to login");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="About">
        <div className="header mt-2 d-flex flex-column">
          <span className="title-text heading">
            About Me
          </span>
          <div className="img w-50 mx-auto ">
            <figure>
              <img src={sirImg} alt="" className="img-fluid sirPhoto rounded-2" />
              <figcaption className="mx-auto text-center">
                <span className="subtitle-text">Julian Menezes .R</span>
              </figcaption>
              <figcaption className="mx-auto body-text text-center">
                <span className="body-text">
                  Technical Trainer, Academic Consultant, Asst. Prof.
                </span>
              </figcaption>
            </figure>
          </div>
        </div>
      </div>
      <div class="bg-info box-shadow p-2 rounded-4">
        <div className="header mt-2 d-flex flex-column">
          <span className="title-text text-white heading">Login</span>
          <span className="opacity-75 text-white">
            Only admins can login here.
          </span>
        </div>
        <form action="" onSubmit={handleLogin} className="d-flex flex-column my-3 mx-2">
          <input
            type="text"
            placeholder="User Name"
            className="form-control shadow-none mb-2"
            name="username"
          />
          <input
            type="password"
            placeholder="Password"
            className="form-control shadow-none mb-2"
            name="password"

          />
          <button
            className="btn btn-secondary d-flex flex-row align-items-center justify-content-center"
            type="submit"
          >
            <span class="material-symbols-outlined me-1">login</span>Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
