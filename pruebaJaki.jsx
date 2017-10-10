<form id="registrationForm" className="form-horizontal">
  <div className="form-group">
    <i className="fa fa-user-circle-o col-xs-3" aria-hidden="true" />
    <div className="col-xs-4">
      <label htmlFor="text">Fisrt Name</label>
      <input
        type="text"
        className="form-control"
        name="fist name"
        id="fName"
        placeholder="First name"
      />
    </div>
    <div className="col-xs-4">
      <label htmlFor="text">Last Name</label>
      <input
        type="text"
        className="form-control"
        name="last name"
        id="lName"
        placeholder="Last name"
      />
    </div>
  </div>
  <div className="form-group">
    <i className="fa fa-envelope col-xs-3 " aria-hidden="true" />
    <div className="col-xs-4">
      <label htmlFor="email">Email address</label>
      <input
        type="email"
        className="form-control"
        name="email"
        id="eName"
        placeholder="e-mail"
      />
    </div>
  </div>
  <div className="form-group">
    <i className="fa fa-check-circle col-xs-3" aria-hidden="true" />
    <div className="col-xs-8">
      <button type="submit" className="btn btn-default">
        Sign up
      </button>
    </div>
  </div>
</form>
