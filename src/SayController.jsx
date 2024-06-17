const SayController = ({handleSetMessage}) => {
    return(
      <div>
          <button onClick={ () => handleSetMessage('안녕하세요!') }>입장</button>
          <button onClick={ () => handleSetMessage('안녕히 가세요!') }>퇴장</button>
      </div>
    )
  }
  
  export default SayController