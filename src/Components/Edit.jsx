const Edit = () => {
  return (
    <div>
      <form>
        <h4>Edit Transection</h4>
        <div>
          <label htmlFor="text">Text</label>
          <br />
          <input type="text" name="text" id="text" /> <br />
        </div>
        <div>
          <label htmlFor="amount">Amount:</label>
          <br />
          <input type="number" name="amount" id="amount" />
        </div>
        <br />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default Edit;
