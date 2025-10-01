import React from 'react';
import { Row, Col, Card } from 'antd';
import { useSelector } from 'react-redux';

const { Meta } = Card;

export default function CrearServicio() {
  const clientesCampanias = useSelector((state) => state.asistencias?.clientesCampanias || []);

  return (
    <div style={{ marginBottom: 15 }}>
      <Row>
        <Col span={12}>
          <div className="card__titulo">Selecciona la Campaña</div>
        </Col>
      </Row>

      <div className="card__contenido">
        <Row gutter={[10, 10]}>
          {clientesCampanias.map((cliente, i) => {
            const campanias = cliente.campanias && cliente.campanias;
            if (campanias.length === 0) return null;

            return (
              <Col key={i}>
                <Meta
                  title={cliente.clienteNombre}
                  style={{ marginBottom: 10, textAlign: 'center' }}
                />
                <Card hoverable style={{ width: 240, textAlign: 'center' }}>
                  {campanias.map((c, j) => (
                    <div key={j} className="campaniaItem">
                      {c.campaniaNombre}
                    </div>
                  ))}
                </Card>
              </Col>
            );
          })}
        </Row>
      </div>
    </div>
  );
}
