import axios from "axios";
import React, { useState, useEffect } from "react";

function Task() {
  const [posts, setPosts] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(4);
  const [loading, setLoading] = useState(true);

  const API_DATA = `http://jsonplaceholder.typicode.com/todos`;

  const handleClickAdd = () => {
    setButtonClicked(buttonClicked + 1);
  };
  const handleClickDelete = (id) => {
    alert(id);
    fetch(`${API_DATA}/${id}`, {
      method: "DELETE",
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
  };

  useEffect(() => {
    axios
      .get(`${API_DATA}`)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    if (posts.length !== 0) {
      setLoading(false);
    }
    console.log(posts);
  }, [posts]);

  return (
    <div>
      {loading ? (
        <h1 className="text-center mt-5">Loading...</h1>
      ) : (
        <div class="container table-responsive py-5">
          <table class="table table-bordered table-hover">
            <thead class="thead-dark">
              <tr className="text-center">
                <th scope="col">ID</th>
                <th scope="col">Title</th>
                <th scope="col">Action</th>
              </tr>
            </thead>
            <tbody className="text-center">
              {posts
                .filter((list) => list.id < buttonClicked)
                .map((items) => {
                  return (
                    <tr>
                      <th scope="row" key={items.id}>
                        {items.id}
                      </th>
                      <th>{items.title}</th>
                      <th className="text-center">
                        <button
                          type="button"
                          className="btn btn-danger"
                          onClick={() => handleClickDelete(items.id)}
                        >
                          Delete
                        </button>
                      </th>
                    </tr>
                  );
                })}
            </tbody>
          </table>
          <button
            type="button"
            className="btn btn-primary mt-5"
            onClick={handleClickAdd}
          >
            Add
          </button>
        </div>
      )}
    </div>
  );
}

export default Task;
