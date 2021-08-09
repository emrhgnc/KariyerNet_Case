import React, { useEffect, useState } from "react";

function Jobs(params) {
    const posts= params.posts;

  return (
    <table className="table table-sm table-success table-striped">
      <thead>
        <tr>
          <th>Position</th>
          <th>Quality</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {posts.map((post) => (
          <tr key={post.id}>
            <td>{post.position}</td>
            <td>{post.quality}</td>
            <td>
              <a href={"job/" + post.id}>Details</a>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Jobs;
