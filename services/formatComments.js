const turnFormatComments = (comments) => {
  return comments.map((comment) => {
    return {
      _id: comment._id,
      nome: comment.nome,
      comentario: comment.comentario,
      data: comment.data.toLocaleString('pt-BR', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      }),
    };
  });
};


module.exports = turnFormatComments

