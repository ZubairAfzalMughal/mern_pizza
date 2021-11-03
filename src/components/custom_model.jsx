import React from "react";
import LoadingSpin from "../widget/loading_spin";

const CustomModel = ({ title, description, imgUrl }) => {
  return (
    <div className="text-center">
      <div
        className="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5
                className="modal-title"
                style={{ fontWeight: "bolder" }}
                id="exampleModalLabel"
              >
                {title}
              </h5>
            </div>
            <div className="modal-body">
              {!imgUrl && <LoadingSpin />}
              <img src={imgUrl} style={{ height: 350, width: 350 }} />
              <p>{description}</p>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-sm btn-danger"
                data-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomModel;
