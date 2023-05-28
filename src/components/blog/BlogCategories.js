import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { get_categories } from 'redux/actions/categories';

function BlogCategories({ get_categories, categories }) {
  useEffect(() => {
    get_categories();
  }, []);

  return (
    <div className="container-sm d-flex justify-content-center my-5">
      <Link to="/blog" className="btn ml-1 mr-1 btn-secondary btn-rounded" data-mdb-close="true">
        Todas
      </Link>
      {categories &&
        categories.map((category) => (
          <Link
            to={`/blog/categories/${category.id}`}
            className="btn ml-1 mr-1 btn-secondary btn-rounded"
            data-mdb-close="true"
            key={category.id}
          >
            {category.name}
          </Link>
        ))}
    </div>
  );
}

const mapStateToProps = (state) => ({
  categories: state.categories.categories,
});

export default connect(mapStateToProps, {
  get_categories,
})(BlogCategories);