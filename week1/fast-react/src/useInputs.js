import { useState, useCallback } from 'react';

function useInputs(initalForm) {
  const [form, setForm] = useState(initalForm);
  const onChange = useCallback((e) => {
    const { name, value } = e.target;
    // eslint-disable-next-line no-shadow
    setForm((form) => ({ ...form, [name]: value }));
  }, []);
  const reset = useCallback(() => setForm(initalForm), [initalForm]);
  return [form, onChange, reset];
}

export default useInputs;
