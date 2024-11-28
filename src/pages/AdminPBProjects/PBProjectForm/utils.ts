const onKeyDownDescriptionField = (
  e: React.KeyboardEvent<HTMLDivElement>,
  [descriptionValue, setDescriptionValue]: [string, React.Dispatch<React.SetStateAction<string>>],
) => {
  if (e.key === 'Enter' && e.shiftKey) {
    const inputEl = e.target as HTMLInputElement;
    const cursorPositionIdx = inputEl.selectionStart || descriptionValue.length - 1;
    const updatedDescriptionValue = (
      `${descriptionValue.slice(0, cursorPositionIdx)}\n${descriptionValue.slice(cursorPositionIdx)}`
    );
    setDescriptionValue(updatedDescriptionValue);
    setTimeout(() => {
      inputEl.setSelectionRange(cursorPositionIdx + 1, cursorPositionIdx + 1);
    }, 0);
  }
};

export default {
  onKeyDownDescriptionField,
};
