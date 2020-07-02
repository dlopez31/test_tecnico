import { PendienteComponent } from './pendiente.component';
import { HistoriaService } from '../../services/historia.service';
import { empty, of, throwError } from "rxjs";
import { Historia } from 'src/app/interfaces/interfaces';

describe('PendienteComponent', () => {
  let componente: PendienteComponent;
  const historiaService = new HistoriaService(null);

  beforeEach(() => {
    componente = new PendienteComponent(historiaService);
  });

  it('prueba que se llama el servicio de obtenerHistoria', () => {
    const espia = spyOn(historiaService, 'obtenerHistoria').and.callFake((resp) => {
      return empty();
    });
    componente.ngOnInit();
    expect(espia).toHaveBeenCalled;
  });


  it('prueba que se  obtenengan las Historia', () => {
    const historia: Historia =
    {
      subject: 'Requerimiento dos',
      assigned_to_extra_info: {
        photo: 'https://taiga.tecnoandina.cl/media/user/7/f/a/6/3b2b8adc8609472c06c44e2fdd8c7b98c17f32a2f8f43180ea6f9fd14ea7/subzero.jpg.80x80_q85_crop.jpg',
        username: 'Sub-Zero',
      },
      status_extra_info: { name: 'In progress' }
    };
    spyOn(historiaService, 'obtenerHistoria').and.returnValue(of([historia]));
    componente.ngOnInit();
    expect(componente.listaHistoria.indexOf(historia)).toBeGreaterThanOrEqual(0);
  });

  it('prueba que ocurrar un error al obtener las Historia', () => {
    spyOn(historiaService, 'obtenerHistoria').and.returnValue(throwError({ error: 'error' }));
    componente.ngOnInit();
    expect(componente.listaHistoria.length).toBe(0);
  });

});
