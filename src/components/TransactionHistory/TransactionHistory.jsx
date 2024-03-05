import css from './TransactionHistory.module.css'

const TransactionHistory = ({ items }) => {
    return (
      <>
        <table className={css.container}>
  <thead>
    <tr className={css.title}>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </thead>
  <tbody className={css.item}>
  {items.map(item => (
    <tr className={css.color} key={item.id}>
      <td className={css.text}>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
   ))}
  </tbody>
</table>
      </>
    );
  };

  export default TransactionHistory;