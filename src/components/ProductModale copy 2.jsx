import React from "react";
import { useState } from 'react'

function ProductModale({ showModal, onCloseModal, onSubmit}) {
  const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)
  return (
    <div>
      {/* Composant au centre */}
      {showModal && (
        <div
          className="modal"
          style={{ display: "block", backgroundColor: "rgba(0, 0, 0, 0.5)" }}
        >
          <div className="modal-dialog modal-dialog-centered" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title">Mon Composant au Centre</h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                  onClick={onCloseModal}
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <form className="add-form" onSubmit={onSubmit}>
                  <div className="form-control">
                    <label>
                      Task
                      <input
                        type="text"
                        value={text}
                        placeholder="Add Task"
                        onChange={(e) => setText(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label>
                      Day & Time
                      <input
                        type="text"
                        placeholder="Add Task"
                        value={day}
                        onChange={(e) => setDay(e.target.value)}
                      />
                    </label>
                  </div>
                  <div className="form-control form-control-check">
                    <label>
                      Set Reminder
                      <input
                        type="checkbox"
                        checked={reminder}
                        onChange={(e) => setReminder(e.currentTarget.checked)}
                      />
                    </label>
                  </div>
                  <input type="submit" className="btn btn-block" value="save" />
                </form>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                  onClick={onCloseModal}
                >
                  Fermer
                </button>
                <button type="button" className="btn btn-primary">
                  Enregistrer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductModale;
