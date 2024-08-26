// src/components/SwitchMode.js

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { switchToSeller, switchToBuyer } from '../store/userSlice';
import { useNavigate, useLocation } from 'react-router-dom';

function SwitchMode() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const mode = useSelector((state) => state.user.mode);

  useEffect(() => {
    // Retrieve the saved mode from local storage
    const savedMode = localStorage.getItem('userMode');
    if (savedMode) {
      if (savedMode === 'seller') {
        dispatch(switchToSeller());
      } else {
        dispatch(switchToBuyer());
      }
    }
  }, [dispatch]);

  useEffect(() => {
    // Ensure switch reflects the current mode and route on mount
    const currentPath = location.pathname;
    if (currentPath.includes('seller') && mode !== 'seller') {
      dispatch(switchToSeller());
      localStorage.setItem('userMode', 'seller');
    } else if (currentPath.includes('buyer') && mode !== 'buyer') {
      dispatch(switchToBuyer());
      localStorage.setItem('userMode', 'buyer');
    }
  }, [location.pathname, mode, dispatch]);

 
  const handleToggle = () => {
    if (mode === 'buyer') {
      dispatch(switchToSeller());
      localStorage.setItem('userMode', 'seller');
      setTimeout(() => {
        navigate('/dashboard/seller'); // Navigate to the seller page after delay
      }, 20); // 5ms delay
    } else {
      dispatch(switchToBuyer());
      localStorage.setItem('userMode', 'buyer');
      setTimeout(() => {
        navigate('/dashboard/buyer'); // Navigate to the buyer page after delay
      }, 20); // 5ms delay
    }
  }

  return (
    <div className={`switch-mode-section ${mode === 'seller' ? 'checked' : ''}`}>
      <span className="switch-text">
        Switch to {mode === 'buyer' ? 'seller' : 'buyer'}
      </span>
      <label className="switch" htmlFor='switch-mode'>
        <input
          type="checkbox"
          name="switch-mode"
          id="switch-mode"
          checked={mode === 'seller'}
          onChange={handleToggle}
        />
        <span className="slider round"></span>
      </label>
    </div>
  );
}

export default SwitchMode;
