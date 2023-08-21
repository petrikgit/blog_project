import Sidebar from '../../components/sidebar'
import TopBar from "../../components/topbar";
import axios from 'axios'
import { getArticles, getCategories, getImageById, deleteArticle, updateArticle, updateArticlePicture, postArticle } from '../../utils/APIRoutes';
import React, { useEffect, useState, useRef } from 'react';
import { MDBModal, MDBModalBody, MDBModalHeader } from 'mdbreact';
import { FaTrash, FaPen, FaPlus } from 'react-icons/fa';
import { useNavigate, useLocation } from 'react-router-dom';
import Placeholder from '../../assets/img/placeholder.png';
import { getURLParam, formatDate } from '../../assets/js/helpers.js'
import { hideLoader, showLoader } from '../../assets/js/helpers.js';
import { Helmet } from 'react-helmet-async'
import Spinner from "../../components/spinner.jsx";
import { status } from 'popper/farms/saucelabs';

const _article = {
  title: "",
  content: "",
  author: "Admin",
  shortenedDescription: "",
  resource: "",
  category: "",
  status: "Draft",
  createdDate: "",
  image: {
    small: "",
    medium: "",
    large: ""
  },
  imgDescription: "",
  viewsCount: 0,
  viewsCountedAt: "",
  // _id: ""
};

const ListArticles = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState();
  const [statusFilter, setStatusFilter] = useState();
  const [searchTerm, setSearchTerm] = useState('');
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [showConfirmationPermanently, setShowConfirmationPermanently] = useState(false);
  const [selectedArticleId, setSelectedArticleId] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [articleImage, setArticleImage] = useState("");
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [shortDescription, setShort] = useState('');
  const [category, setCategory] = useState('');
  const [resource, setResource] = useState('');
  const [loading, setLoading] = useState(false);
  const [editingArticleId, setEditingArticleId] = useState(null);

  const location = useLocation();

  const updateParams = (param, value) => {
    const searchParams = new URLSearchParams(location.search);

    if (value === '') {
      searchParams.delete(param);
    } else {
      searchParams.set(param, value);
    }

    navigate(`?${searchParams.toString()}`);
  };

  const setImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let width = 180;
        let height = (img.height * width) / img.width;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const smallImage = canvas.toDataURL("image/jpeg");

        width = 640;
        height = (img.height * width) / img.width;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const mediumImage = canvas.toDataURL("image/jpeg");

        width = 1200;
        height = (img.height * width) / img.width;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const largeImage = canvas.toDataURL("image/jpeg");

        const imageObject = {
          small: smallImage,
          medium: mediumImage,
          large: largeImage
        };

        setArticleImage(imageObject);
        _article.image = imageObject
        document.querySelector('#articleImageID').src = imageObject.medium;
      };

      img.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  _article.title = title;
  _article.content = description;
  _article.shortenedDescription = shortDescription;
  _article.category = category;
  _article.resource = resource;
  _article.date = new Date();
  _article.viewsCountedAt = new Date();


  const inputRef = useRef(null);

  useEffect(() => {
    let user = localStorage.getItem('admin');

    if (!user) {
      navigate('/admin');
    }
    fetchData(1, 10);
  }, [navigate]);

  const fetchData = async (page, itemsPerPage, statusFilter, search) => {
    showLoader();
    try {
      const categories = await axios.get(getCategories);
      const response = await axios.get(getArticles, {
        params: { page, itemsPerPage, status: statusFilter, search },
      });

      setCategories(categories.data);
      setTotalPages(response.data.totalPages);
      setData(response.data.articles);
      setCurrentPage(page);
      hideLoader();
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleOpenCreateModal = () => {
    setShowCreateModal(true);
  };

  let renderTableRows = data.map((item) => (
    <tr key={item.id}>
      <td >{item.title}</td>
      <td >{formatDate(item.date)}</td>
      <td >{item.status}</td>
      <td >
        <div className="action-icons">
          {item.status === "Deleted" ? (
            <FaTrash
              className="trash-icon m-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteConfirmationPermanently(item.id)}
            />
          ) : (
            <FaTrash
              className="trash-icon m-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleDeleteConfirmation(item.id)}
            />
          )}
          {editingArticleId === item.id && loading ? (
            <Spinner />
          ) : (
            <FaPen
              className="pen-icon m-2"
              style={{ cursor: "pointer" }}
              onClick={() => handleEditArticle(item.id)}
            />
          )}
        </div>
      </td>
    </tr>
  ));

  const renderPagination = () => {
    const pageNumbers = totalPages;
    const paginationItems = [];

    for (let i = 1; i <= pageNumbers; i++) {
      paginationItems.push(
        <li key={i} className={`page-item ${currentPage === i ? 'active' : ''}`}>
          <button className="page-link" onClick={() => handlePageChange(i)}>
            {i}
          </button>
        </li>
      );
    }

    return (
      <nav>
        <ul className="pagination">
          {paginationItems}
        </ul>
      </nav>
    );
  };

  const handlePageChange = async (pageNumber) => {
    let status = getURLParam('status');
    fetchData(pageNumber, 10, status);
  };

  const handleDeleteConfirmation = (articleId) => {
    setSelectedArticleId(articleId);
    setShowConfirmation(true);
  };

  const handleDeleteConfirmationPermanently = (articleId) => {
    setSelectedArticleId(articleId);
    setShowConfirmationPermanently(true);
  };

  const handleDeleteArticle = async () => {
    const selectedArticle = data.find((item) => item.id === selectedArticleId);

    selectedArticle.status = "Deleted";

    try {
      await axios.put(updateArticle, { selectedArticle });
      setShowConfirmation(false);
      fetchData(currentPage, 10, statusFilter);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
    setShowConfirmation(false);
  };

  const handleDeleteArticlePermanently = async () => {
    try {
      await axios.post(deleteArticle, { selectedArticleId });
      setShowConfirmation(false);
      fetchData(currentPage, 10, statusFilter);
    } catch (error) {
      console.error('Error deleting article:', error);
    }
    setShowConfirmationPermanently(false);
  };

  const publishArticle = async () => {
    setLoading(true);

    if (!selectedArticle.category
      || selectedArticle.resource === ""
      || selectedArticle.title === ""
      || selectedArticle.content === ""
      || selectedArticle.resource === ""
    ) {
      alert('Please fill all data')
      setLoading(false);
    } else {
      let selArticleId = selectedArticle.id
      selectedArticle.status = "Published";
      try {
        await axios.put(updateArticle, { selectedArticle });
        await axios.put(updateArticlePicture, { selArticleId, articleImage })
        setShowConfirmation(false);
        fetchData(currentPage, 10, statusFilter);
        updateParams('status', '')
      } catch (error) {
        alert(`Error publishing article. Title of the conflicted article: ${error.response.data.conflictingArticles}. Please delete or update this article.`);
        window.location.reload();
      }
      setLoading(false);
      setShowEditModal(false);
    }
  }

  const handleEditArticle = async (articleId) => {
    setLoading(true);
    setEditingArticleId(articleId);
    setArticleImage("");
    let articleImageSmall = await axios.post(`${getImageById}?param=small`, { articleId });
    let articleImageMedium = await axios.post(`${getImageById}?param=medium`, { articleId });
    let articleImageLarge = await axios.post(`${getImageById}?param=large`, { articleId });
    const selectedArticle = data.find((item) => item.id === articleId);

    let obj = {
      small: articleImageSmall.data.image,
      medium: articleImageMedium.data.image,
      large: articleImageLarge.data.image
    };

    if (articleImageMedium.data.image) {
      setArticleImage(obj);
    }
    setSelectedArticle(selectedArticle);
    setEditingArticleId()
    setShowEditModal(true);
    setLoading(false);
  };

  const handleDeleteImage = () => {
    setArticleImage("");
  };

  const handleAddImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onload = () => {
      const img = new Image();
      img.onload = () => {
        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        let width = 180;
        let height = (img.height * width) / img.width;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const smallImage = canvas.toDataURL("image/jpeg");

        width = 640;
        height = (img.height * width) / img.width;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const mediumImage = canvas.toDataURL("image/jpeg");

        width = 1200;
        height = (img.height * width) / img.width;
        canvas.width = width;
        canvas.height = height;
        ctx.drawImage(img, 0, 0, width, height);

        const largeImage = canvas.toDataURL("image/jpeg");

        const imageObject = {
          small: smallImage,
          medium: mediumImage,
          large: largeImage
        };

        setArticleImage(imageObject);
        document.querySelector('#image-placeholder-id').src = mediumImage;
      };

      img.src = reader.result;
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleClick = async (e) => {
    e.preventDefault();
    setLoading(true);

    if (_article.title === "" ||
      _article.content === "" ||
      _article.shortenedDescription === "" ||
      _article.category === ""
    ) {
      alert('Please fill all data')
    } else {
      _article.createdDate = new Date();
      let res = await axios.post(postArticle, _article);

      alert('New article uploaded');
      setLoading(false);
      fetchData(0, 10)
      setShowCreateModal(false);

      if (res.status !== 200) {
        throw (res.error)
      }
    }
  };

  const handleSearch = () => {
    const currentValue = inputRef.current.value;
    fetchData(1, 10, statusFilter, currentValue);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <div id="wrapper">
      <Helmet>
        <title>List of all articles | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
        <meta name="description" content="List of all articles. | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"></meta>
        <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
        <link rel="canonical" href={`/admin_list_articles`}></link>
        <meta name="robots" content="noindex" />
      </Helmet>
      <Sidebar />
      <div id="content-wrapper" className="d-flex flex-column">
        <div id="content">
          <TopBar />
          <div className="container" style={{ maxWidth: "1200px !important" }}>
            <button className="btn btn-primary" onClick={handleOpenCreateModal}>Create Article</button>

            <div className='table-responsive'>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  ref={inputRef}
                  onSubmit={(e) => {
                    setSearchTerm(e.target.value);
                    handleSearch();
                  }}
                  onKeyDown={handleKeyDown}
                />
              </div>

              <div className="filter-buttons">
                <button
                  className={`btn btn-outline-primary ${statusFilter === 'all' ? 'active' : ''}`}
                  onClick={() => { fetchData(0, 10, "", searchTerm); updateParams('status', '') }}
                >
                  All
                </button>
                <button
                  className={`btn btn-outline-primary ${statusFilter === 'published' ? 'active' : ''}`}
                  onClick={() => { fetchData(0, 10, 'Published', searchTerm); updateParams('status', 'Published') }}
                >
                  Published
                </button>
                <button
                  className={`btn btn-outline-primary ${statusFilter === 'drafted' ? 'active' : ''}`}
                  onClick={() => { fetchData(0, 10, 'Draft', searchTerm); updateParams('status', 'Draft') }}
                >
                  Drafted
                </button>
                <button
                  className={`btn btn-outline-primary ${statusFilter === 'deleted' ? 'active' : ''}`}
                  onClick={() => { fetchData(0, 10, 'Deleted', searchTerm); updateParams('status', 'Deleted') }}
                >
                  Deleted
                </button>
              </div>

              <table className="table table-striped">
                <thead>
                  <tr key="table">
                    <th>Title</th>
                    <th>Date</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {renderTableRows}
                </tbody>
              </table>
              {renderPagination()}
            </div>
          </div>
        </div>
      </div>
      {showConfirmation && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button type="button" className="close" onClick={() => setShowConfirmation(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this article? This item won't be deleted permanently as it will move to the trash folder.
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmation(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteArticle}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showConfirmationPermanently && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Confirmation</h5>
                <button type="button" className="close" onClick={() => setShowConfirmationPermanently(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                Are you sure you want to delete this article permanently?
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" onClick={() => setShowConfirmationPermanently(false)}>Cancel</button>
                <button type="button" className="btn btn-danger" onClick={handleDeleteArticlePermanently}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showEditModal && selectedArticle && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Edit Article</h5>
                <button type="button" className="close" onClick={() => setShowEditModal(false)}>
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form style={{ textAlign: "left" }}>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1"><b>Title</b></label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      onChange={e => selectedArticle.title = e.target.value}
                      defaultValue={selectedArticle.title}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"><b>Picture</b></label>
                    {articleImage ?
                      <FaTrash className="trash-icon m-2" style={{ cursor: 'pointer', float: "right" }} onClick={handleDeleteImage} />
                      : <FaPlus className="trash-icon m-2" style={{ cursor: 'pointer', float: "right" }} onClick={() => document.getElementById('image-input').click()} />}
                    <img
                      alt="placeholder"
                      src={articleImage !== "" ? articleImage.medium : Placeholder}
                      className="form-control"
                      id="image-placeholder-id"
                      rows={3}
                      style={{ height: "300px", objectFit: "cover" }}
                    />
                    <input
                      type="file"
                      id="image-input"
                      accept="image/*"
                      onChange={handleAddImage}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1"><b>Content content</b></label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={10}
                      onChange={e => selectedArticle.content = e.target.value}
                      defaultValue={selectedArticle.content}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1"><b>Shortened description</b></label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={selectedArticle.shortenedDescription ? selectedArticle.shortenedDescription : "-"}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlInput1"><b>Resource URL: </b></label>
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={2}
                      onChange={e => selectedArticle.resource = e.target.value}
                      defaultValue={selectedArticle.resource}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1"><b>Author</b></label>
                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={selectedArticle.author}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlSelect1">Example select</label>
                    <select className="form-control" id="exampleFormControlSelect1" onChange={e => selectedArticle.category = e.target.value} defaultValue={selectedArticle.category}>
                      <option key="no-key-1">-</option>
                      {categories.map(category => {

                        return <option key={`${category.title}-1`} defaultValue={category.title}>{category.title}</option>
                      })}
                    </select>
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Article status</label>
                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={selectedArticle.status}
                      disabled
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="exampleFormControlTextarea1">Published date</label>
                    <input
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={3}
                      defaultValue={
                        selectedArticle.date
                      }
                      disabled
                    />
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowEditModal(false)}>Close</button>
                <button className="btn btn-success" onClick={() => publishArticle()}>
                  {loading ? (
                    <Spinner />
                  ) : (
                    selectedArticle.status === "Published" ? "Save" : "Publish"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
      {showCreateModal && (
        <div className="modal fade show" style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Create Article</h5>
                <button type="button" className="close" onClick={() => setShowCreateModal(false)}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <div className="modal-body">
                <form>
                  <div className="form-row">
                    <div className="form-group col-md-6">
                      <label htmlFor="inputTitle">Title</label>
                      <input type="text" className="form-control" id="inputTitle" placeholder="Title" onChange={e => setTitle(e.target.value)} />
                    </div>
                    <div className="form-group col-md-6">
                      <label htmlFor="inputDescription">Description</label>
                      <textarea type="text" className="form-control" id="inputDescription" placeholder="Description" onChange={e => setDescription(e.target.value)} />
                    </div>
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputShort">Short Description</label>
                    <input type="text" className="form-control" id="inputShort" placeholder="Short Description" onChange={e => setShort(e.target.value)} />
                  </div>
                  <div className="form-group col-md-6">
                    <label htmlFor="inputShort">URL resource</label>
                    <input type="text" className="form-control" id="inputResource" placeholder="Resource" onChange={e => setResource(e.target.value)} />
                  </div>
                  <div className="mb-4 d-flex mt-3">
                    <img id="articleImageID" src={Placeholder}
                      alt="example placeholder" style={{ width: "300px" }} />
                  </div>
                  <div className="d-flex">
                    <div className="btn btn-primary btn-rounded">
                      <label className="form-label text-white m-1" htmlFor="customFile1">Choose file</label>
                      <input type="file" className="form-control d-none" id="customFile1" onChange={setImage} />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-group col-md-4">
                      <label htmlFor="inputState">Category</label>
                      <select id="inputState" className="form-control" onChange={e => setCategory(e.target.value)}>
                        <option key="no-key-2">Choose...</option>
                        {categories.map(category => (
                          <option key={`${category.title}-2`} value={category.id}>{category.title}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </form>
              </div>
              <div className="modal-footer">
                <button className="btn btn-secondary" onClick={() => setShowCreateModal(false)}>Cancel</button>
                <button className="btn btn-primary" onClick={handleClick}>
                  {loading ? (
                    <Spinner />
                  ) : (
                    "Upload article"
                  )}
                </button>

              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ListArticles;