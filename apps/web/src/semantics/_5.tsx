import { View } from 'ui';

const classes =
  'block px-2 hover:after:bg-blue-500 after:absolute after:-bottom-0.5 after:h-0.5 after:start-0 after:w-full after:content-[""] relative py-2 text-gray-300 hover:text-white';

const _5 = () => {
  return (
    <View
      title="5. Semantics (Navigation)"
      difficulty={1}
      description="Some person sent you an auto-generated navigation. Can the markup be improved from an accessibility standpoint? You can use the styles provided, or you can use your own. Don't forget to make each item a real link."
      challenge="Imagine the current page is 'Facebook', how would you indicate that to the user?"
    >
      <div className="max-w-2xl flex flex-col gap-4">
        <div className="flex border-2 rounded-lg border-gray-400 gap-4 px-4 items-center">
          <p className={classes}>Facebook</p>
          <p className={classes}>Amazon</p>
          <p className={classes}>Apple</p>
          <p className={classes}>Netflix</p>
          <p className={classes}>Google</p>
        </div>
      </div>

      <div>
        <nav className="max-w-2xl flex flex-col gap-4">
          <ul className="flex border-2 rounded-lg border-gray-400 gap-4 px-4 items-center">
            <li><a href="#" aria-current="page" className={classes}>Facebook</a></li>
            <li><a href="#" className={classes}>Amazon</a></li>
            <li><a href="#" className={classes}>Apple</a></li>
            <li><a href="#" className={classes}>Netflix</a></li>
            <li><a href="#" className={classes}>Google</a></li>
          </ul>
        </nav>
      </div>
    </View >
  );
};

export default _5;
