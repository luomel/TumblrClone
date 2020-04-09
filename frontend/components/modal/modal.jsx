import React from 'react';
import { closeModal } from '../../actions/modal_actions';
import { connect } from 'react-redux';
import NewTextPost from "../posts/post_forms/new_text_container";
import EditTextPost from "../posts/post_forms/edit_text_container";
import NewPhotoPost from "../posts/post_forms/new_photo_container";
import EditPhotoPost from "../posts/post_forms/edit_photo_container";
import NewQuotePost from "../posts/post_forms/new_quote_container";
import EditQuotePost from "../posts/post_forms/edit_quote_container";
import NewLinkPost from "../posts/post_forms/new_link_container";
import EditLinkPost from "../posts/post_forms/edit_link_container";

const Modal = ({modal}) => {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal.modal) {
    case "Text Post":
        component = <NewTextPost />;
        break;
    case "Edit Text Post":
        component = <EditTextPost />;
        break;
    case "Photo Post":
        component = <NewPhotoPost />;
        break;
    case "Edit Photo Post":
        component = <EditPhotoPost />;
        break;
    case "Quote Post":
        component = <NewQuotePost />;
        break;
    case "Edit Quote Post":
        component = <EditQuotePost />;
        break;
    case "Link Post":
        component = <NewLinkPost />;
        break;
    case "Edit Link Post":
        component = <EditLinkPost />;
        break;
    default:
        return null;
  }

  return (
    <div className = "modal-background">
      <div className = "modal-child" id = "modal-child" onClick = {e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
