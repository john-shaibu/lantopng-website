import React, { useState, useEffect } from "react";
import "../../styles/blog.css";
import Header from "../components/header";
import Menu from "../components/menu";
import companyLogo from "/icons/lantoplogo2.svg";
import { CalendarBlank, ClockCountdown } from "@phosphor-icons/react";
import johnbaba from "/images/johnbaba.jpg";
import Footer from "../components/footer";
import { Helmet } from "react-helmet";
import CodeBlock from "../components/CodeBlock";

const Title = ({ children, maxLength = 20 }) => {
     return (
          <Helmet>
               <title>
                    Lantopng |{" "}
                    {typeof children === "string"
                         ? children.substring(0, maxLength) + "..."
                         : children}
               </title>
          </Helmet>
     );
};

const ObjectMotionGravityAirResistance = () => {
     const [openMenu, setOpenMenu] = useState(false);

     const openMenuDropdown = () => {
          setOpenMenu(true);
          document.body.classList.add("dropdownMenuOpened");
     };
     const closeMenuDropdown = () => {
          setOpenMenu(false);
          document.body.classList.remove("dropdownMenuOpened");
     };
     useEffect(() => {
          return () => {
               // This cleanup function will be called when the component unmounts
               closeMenuDropdown();
          };
     }, []);

     const matlabCode1 = `
        clc
        clear

        % Initial conditions and time span
        tspan = [0,5];    % Simulate for 5 seconds
        h0 = 100;         % Initial height (m)
        v0 = 0;           % Initial velocity (m/s)
        x0 = [h0; v0];    % Combined initial conditions

        % Solve the ODE system
        [t,z] = ode45(@odefun, tspan, x0);

        % Plot results
        figure(1)
        plot(t, z(:,1))  % Position vs Time
        title('Position vs Time')
        xlabel('Time (s)')
        ylabel('Height (m)')

        figure(2)
        plot(t, z(:,2))  % Velocity vs Time
        title('Velocity vs Time')
        xlabel('Time (s)')
        ylabel('Velocity (m/s)')
        `;

     const matlabCode2 = `
        function eqt = odefun(t,x)
            y = x(1);        % Position
            v = x(2);        % Velocity
            g = 9.81;        % Acceleration due to gravity (m/s²)
            m = 70;          % Mass (kg)
            c = 0.3;         % Drag coefficient (kg/s)
            k = c/m;         % Combined constant
            
            eqt(1) = -v;           % dy/dt = -v
            eqt(2) = g - k*v;      % dv/dt = g - kv
            
            eqt = eqt';
        end
        `;

     return (
          <div>
               <Header
                    openMenuDropdown={openMenuDropdown}
                    companyLogo={companyLogo}
               />
               <Menu closeMenuDropdown={closeMenuDropdown} />
               <Title>
                    Simulating Object Motion Under Gravity with Air Resistance:
                    A MATLAB Implementation
               </Title>
               <div className="blog-read">
                    <div className="container">
                         <div className="blog-header">
                              <div className="blog-information">
                                   <div className="date-posted">
                                        <CalendarBlank size={30} />
                                        <span>1st-January-2025</span>
                                   </div>
                                   <div className="est-read-time">
                                        <ClockCountdown size={30} />
                                        <span>8 minutes read</span>
                                   </div>
                              </div>
                              <h1>
                                   Simulating Object Motion Under Gravity with
                                   Air Resistance: A MATLAB Implementation
                              </h1>
                              <div className="blog-read-details">
                                   <div className="writer-details">
                                        <div className="writer-thumbnail">
                                             <img
                                                  src={johnbaba}
                                                  alt="john shaibu profile picture"
                                             />
                                        </div>
                                        <div className="writer-bio">
                                             <b>John Shaibu</b>
                                             <span>Software engineer</span>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <hr />
                         <div className="blog-content">
                              <h4>Introduction</h4>
                              <p>
                                   Have you ever wondered how objects really
                                   fall in the real world? While we often
                                   simplify physics problems by ignoring air
                                   resistance, real-world scenarios are more
                                   complex. In this post, we'll explore how to
                                   simulate an object falling under gravity
                                   while accounting for air resistance using
                                   MATLAB's ODE45 solver.
                              </p>
                              <h5>The Physics Behind the Fall</h5>
                              <p>
                                   When an object falls through air, it's
                                   subjected to two primary forces:
                              </p>
                              <ul>
                                   <li className="paragraph">
                                        <b >Gravitational Force (Fg):</b> The
                                        force pulling the object downward, given
                                        by Fg = mg
                                   </li>
                                   <li>
                                        <b >Air Resistance (Fr):</b> The force
                                        opposing the motion, given by Fr = cv
                                   </li>
                              </ul>
                              <p>where:</p>
                              <ul>
                                   <li>m is the mass of the object</li>
                                   <li>
                                        g is the acceleration due to gravity
                                        (9.81 m/s²)
                                   </li>
                                   <li>c is the drag coefficient</li>
                                   <li>v is the velocity</li>
                              </ul>
                              <h5>Deriving the Equations</h5>
                              <p>
                                   The net force acting on the object is the
                                   difference between these forces:
                              </p>
                              <pre>Fnet = Fg - Fr = mg - cv</pre>
                              <p>
                                   Using Newton's Second Law (F = ma), we can
                                   write:
                              </p>
                              <pre>ma = mg - cv</pre>
                              <pre>a = g - (c/m)v</pre>
                              <p>
                                   Since acceleration is the rate of change of
                                   velocity (a = dv/dt), we get:
                              </p>
                              <pre>dv/dt = g - (c/m)v</pre>
                              <p>For simplicity, we let k = c/m, giving us:</p>
                              <pre>dv/dt = g - kv</pre>
                              <p>
                                   Additionally, the rate of change of position
                                   is the negative of velocity:
                              </p>
                              <pre>dy/dt = -v</pre>
                              <h5>The MATLAB Implementation</h5>
                              <p>
                                   Our simulation uses MATLAB's ODE45 solver,
                                   which is perfect for solving systems of
                                   ordinary differential equations. Here's how
                                   we implement it:
                              </p>
                              <CodeBlock code={matlabCode1} language="matlab" />
                              <p>
                                   The system of ODEs is defined in a separate
                                   function:
                              </p>
                              <CodeBlock code={matlabCode2} language="matlab" />
                              <h5>Understanding the Results</h5>
                              <p>The simulation produces two key graphs:</p>
                              <ul>
                                   <li>
                                        <b>Position vs Time:</b> Shows how the
                                        height of the object changes over time.
                                        The curve isn't parabolic (as it would
                                        be without air resistance) but instead
                                        shows a more realistic trajectory where
                                        the object's descent gradually slows as
                                        air resistance increases.
                                   </li>
                                   <li>
                                        <b>Velocity vs Time:</b> Demonstrates
                                        how the object's velocity changes.
                                        Instead of increasing linearly (as in a
                                        vacuum), the velocity approaches a
                                        terminal velocity where the
                                        gravitational force equals the air
                                        resistance.
                                   </li>
                              </ul>
                              <h5>Real-World Applications</h5>
                              <p>
                                   This simulation has practical applications in
                                   various fields:
                              </p>
                              <ul>
                                   <li>
                                        Aerospace engineering for modeling
                                        descent of objects
                                   </li>
                                   <li>
                                        Sports science for analyzing projectile
                                        motion
                                   </li>
                                   <li>
                                        Game development for realistic physics
                                        engines
                                   </li>
                                   <li>
                                        Weather forecasting for modeling
                                        particle movement
                                   </li>
                              </ul>
                              <h5>Conclusion</h5>
                              <p>
                                   By incorporating air resistance into our
                                   falling object simulation, we've created a
                                   more realistic model of real-world physics.
                                   The MATLAB implementation using ODE45
                                   provides an elegant solution to what would
                                   otherwise be a complex calculation,
                                   demonstrating the power of numerical methods
                                   in solving physical problems.
                              </p>
                              <p>
                                   The next time you see an object falling,
                                   remember that its motion is governed by these
                                   exact equations, making the simple act of
                                   falling a beautiful example of physics in
                                   action. Happy coding! 🚀
                              </p>
                              <p>
                                You can find the full code on this 
                                <a href="https://github.com/Lantop1k/object_falling_under_gravity"> Github repository</a>
                              </p>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     );
};

export default ObjectMotionGravityAirResistance;
