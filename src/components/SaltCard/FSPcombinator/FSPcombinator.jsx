import KeyValues from "../KeyValues/KeyValues";


const FSPCombinator = ({ saltfsp, stateManager, onPress }) => {
  const keys = Object.keys(stateManager);

  const getValues = (key) => {
    switch (key) {
      case 'Form':
        return Object.keys(saltfsp);
      case 'Strength':
        return Object.keys(saltfsp[stateManager.Form]);
      case 'Packaging':
        return Object.keys(saltfsp[stateManager.Form][stateManager.Strength]);
      default:
        return [];
    }
  };

  return (
    <div className="fsp-combine">
      {keys.map((key) => (
        <KeyValues 
          key={key}
          name={key}
          values={getValues(key)}
          active={stateManager[key]}
          stateManager={stateManager}
          onPress={onPress}
          saltfsp={saltfsp}
        />
      ))}
    </div>
  );
};


export default FSPCombinator;
