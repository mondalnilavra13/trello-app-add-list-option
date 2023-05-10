import React, { useState } from 'react';

const App = () => {
  const [showInputBox, setShowInputBox] = useState(false);
  const [listTitle, setListTitle] = useState('');

  const handleInputBoxClick = () => {
    setShowInputBox(true);
  };

  const handleListTitleChange = (e) => {
    setListTitle(e.target.value);
  };

  const handleAddList = () => {
    // Perform any logic here to add the list
    // For now, let's just print the list title in the console
    console.log(`New list title: ${listTitle}`);
    setShowInputBox(false);
    setListTitle('');
  };

  const handleCancel = () => {
    setShowInputBox(false);
    setListTitle('');
  };

  return (
    <div className="container">
      <div className="glassmorphism-ui">
        <div className="left-panel">
          <div
            className="input-box"
            onClick={handleInputBoxClick}
          >
            {showInputBox ? (
              <div className="inner-box">
                <input
                  type="text"
                  placeholder="Enter list title"
                  value={listTitle}
                  onChange={handleListTitleChange}
                />
                <button onClick={handleAddList}>Add list</button>
                <button onClick={handleCancel}>X</button>
              </div>
            ) : (
              '+ Add a List'
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
