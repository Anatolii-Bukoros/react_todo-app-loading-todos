import classNames from 'classnames';
type Props = {
  error: string;
  onCloseError: () => void;
};

export const ErrorMessage: React.FC<Props> = ({ error, onCloseError }) => {
  const handleCloseError = () => {
    onCloseError();
  };

  return (
    <div
      data-cy="ErrorNotification"
      className={classNames(
        'notification',
        'is-danger',
        'is-light',
        'has-text',
        'has-text-weight-normal',
        { hidden: !error },
      )}

    >
      <button
        data-cy="HideErrorButton"
        type="button"
        className="delete"
        onClick={handleCloseError}
      />
      {error}
    </div>
  );
};
