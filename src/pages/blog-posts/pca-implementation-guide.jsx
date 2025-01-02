import { useState, useEffect } from "react";
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

const PCAImplementationGuide = () => {
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

const matlabCode1 = `data = rand(1000, 500); % Example: Generating random data
`;

const matlabCode2 = `X_mean = mean(data); % Calculate the mean
X_diff = data - X_mean; % Center the data
`;

const matlabCode3 = `covmatrix = cov(X_diff); % Compute covariance matrix
`;

const matlabCode4 = `[eigvectors, eigmatrix] = eig(covmatrix); % Eigenvalue decomposition
`;

 const matlabCode5 = ` values = diag(eigmatrix); % Extract eigenvalues
[~, sortidx] = sort(values, 'descend'); % Sort in descending order

% Rearranging eigenvectors according to sorted eigenvalues
svectors = eigvectors(:, sortidx);
svalues = values(sortidx);
`;

const matlabCode6 = `num_new_space = 25; % Number of principal components to keep
selected_vectors = svectors(:, 1:num_new_space); % Select top m vectors
`;

const matlabCode7 = `X_pca = X_diff * selected_vectors; % Transform data into PCA space
`;

const matlabCode8 = `total_variance = sum(svalues);
explained_variance_ratio = sum(svalues(1:num_new_space)) / total_variance; % Ratio of variance explained by selected components
`;

     return (
          <div>
               <Header
                    openMenuDropdown={openMenuDropdown}
                    companyLogo={companyLogo}
               />
               <Menu closeMenuDropdown={closeMenuDropdown} />
               <Title>
                    A Comprehensive Guide to Implementing Principal Component
                    Analysis (PCA) in MATLAB
               </Title>
               <div className="blog-read">
                    <div className="container">
                         <div className="blog-header">
                              <div className="blog-information">
                                   <div className="date-posted">
                                        <CalendarBlank size={30} />
                                        <span>2nd-Janary-2024</span>
                                   </div>
                                   <div className="est-read-time">
                                        <ClockCountdown size={30} />
                                        <span>8 minutes read</span>
                                   </div>
                              </div>
                              <h1>
                                   A Comprehensive Guide to Implementing
                                   Principal Component Analysis (PCA) in MATLAB
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
                                   Principal Component Analysis (PCA) is a
                                   powerful statistical technique used for
                                   dimensionality reduction, making it easier to
                                   visualize and analyze high-dimensional data.
                                   This blog post will walk you through the
                                   steps to implement PCA from scratch in
                                   MATLAB, based on resources available in a
                                   GitHub repository.
                              </p>
                              <h5>Step 1: Data Preparation</h5>
                              <p>
                                   Before performing PCA, you need to prepare
                                   your dataset. In our example, we will work
                                   with a dataset of 1000 samples and 500
                                   features.
                              </p>
                              <p>
                                   <b>Load Your Data:</b> Begin by loading your
                                   dataset into MATLAB. This can be done using
                                   various methods depending on your data
                                   format.
                              </p>
                              <CodeBlock code={matlabCode1} language="matlab" />
                              <h5>Step 2: Center the Data</h5>
                              <p>
                                   To perform PCA, the first step is to center
                                   the data by subtracting the mean of each
                                   feature.
                              </p>
                              <CodeBlock code={matlabCode2} language="matlab" />
                              <h5>Step 3: Compute Covariance Matrix</h5>
                              <p>
                                   Next, calculate the covariance matrix of the
                                   centered data. This matrix expresses how much
                                   the dimensions vary from the mean with
                                   respect to each other.
                              </p>
                              <CodeBlock code={matlabCode3} language="matlab" />
                              <h5>Step 4: Eigenvalue Decomposition</h5>
                              <p>
                                   Perform eigenvalue decomposition on the
                                   covariance matrix to obtain eigenvalues and
                                   eigenvectors.
                              </p>
                              <CodeBlock code={matlabCode4} language="matlab" />
                              <h5>Step 5: Sort Eigenvalues and Eigenvectors</h5>
                              <p>
                                   Extract the eigenvalues from the diagonal of
                                   the eigenvalue matrix and sort them in
                                   descending order. This step helps identify
                                   which principal components explain the most
                                   variance.
                              </p>
                              <CodeBlock code={matlabCode5} language="matlab" />
                              <h5>Step 6: Select Principal Components</h5>
                              <p>
                                   Decide how many principal components you want
                                   to keep (let&apos;s say $$m$$). Select the
                                   top $$m$$ eigenvectors corresponding to the
                                   largest eigenvalues.
                              </p>
                              <CodeBlock code={matlabCode6} language="matlab" />
                              <h5>Step 7: Transform the Data</h5>
                              <p>
                                   Now that you have selected your principal
                                   components, transform your original dataset
                                   into this new space.
                              </p>
                              <CodeBlock code={matlabCode7} language="matlab" />
                              <h5>Step 8: Calculate Explained Variance</h5>
                              <p>
                                   To understand how much variance is retained
                                   in your new dataset, calculate the explained
                                   variance ratio.
                              </p>
                              <CodeBlock code={matlabCode8} language="matlab" />
                              <h5>Conclusion</h5>
                              <p>
                                   You have successfully implemented PCA from
                                   scratch in MATLAB! This process reduces your
                                   dataset&apos;s dimensions while retaining
                                   significant information. The explained
                                   variance ratio helps determine how well your
                                   principal components represent the original
                                   data.
                              </p>
                              <h5>Further Reading and Resources</h5>
                              <ul>
                                   <li>
                                        For a more visual understanding, check
                                        out this{" "}
                                        <a
                                             href="https://www.youtube.com/watch?v=YafpOzp88do"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             YouTube tutorial
                                        </a>{" "}
                                        on PCA using MATLAB.
                                   </li>
                                   <li>
                                        Explore MATLAB&apos;s built-in{" "}
                                        <code>pca</code> function for a
                                        simplified approach to performing PCA.
                                   </li>
                                   <li>
                                        For additional insights into PCA and its
                                        applications, refer to academic
                                        resources or online courses that cover
                                        statistical methods in data analysis.
                                   </li>
                              </ul>
                              <p>
                                   By following these steps, you can effectively
                                   apply PCA to various datasets and enhance
                                   your data analysis capabilities!
                              </p>
                              <h5>Citations</h5>
                              <ul>
                                   <li>
                                        <a
                                             href="https://courses.grainger.illinois.edu/bioe298b/sp2018/Lecture%20Examples/23%20PCA%20slides.pdf"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             https://courses.grainger.illinois.edu/bioe298b/sp2018/Lecture%20Examples/23%20PCA%20slides.pdf
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="https://www.mathworks.com/matlabcentral/fileexchange/24322-principal-component-analysis-pca-in-matlab"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             https://www.mathworks.com/matlabcentral/fileexchange/24322-principal-component-analysis-pca-in-matlab
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="https://www.maskaravivek.com/post/principal-component-analysis-in-matlab/"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             https://www.maskaravivek.com/post/principal-component-analysis-in-matlab/
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="https://www.youtube.com/watch?v=YafpOzp88do"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             https://www.youtube.com/watch?v=YafpOzp88do
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="https://www.mathworks.com/help/stats/pca.html"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             https://www.mathworks.com/help/stats/pca.html
                                        </a>
                                   </li>
                                   <li>
                                        <a
                                             href="https://github.com/Lantop1k/pca"
                                             target="_blank"
                                             rel="noopener noreferrer"
                                        >
                                             https://github.com/Lantop1k/pca
                                        </a>
                                   </li>
                              </ul>
                         </div>
                    </div>
               </div>
               <Footer />
          </div>
     );
};

export default PCAImplementationGuide;
