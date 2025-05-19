import React from 'react'

function Cart() {
  return (
        <div className="container mt-5">
      <h2>Cart</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Product Name </label>
          <input type="email" name="email" className="form-control" onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label className="form-label">Product Id </label>
          <input type="password" name="password" className="form-control" onChange={handleChange} required />
        </div>
        <button type="submit" className="btn btn-success">Cart</button>
      </form>
    </div>
  )
}

export default Cart