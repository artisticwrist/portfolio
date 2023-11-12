function Modal(props) {
    const { name, url, description, github, stacks } = props.project;





    return (
        <div className="modal">
            <div className="box-modal">
                <h1>{name}</h1>
                <p>{description}</p> 
                <p>{stacks}</p>
                <div className="btn-modal-box">
                    <button><a href={url} target={"_blank"}>Link</a></button>
                    <button onClick={props.closeModal}>Close</button>
                </div>
            </div>
        </div>
    );
  }
  
  export default Modal;